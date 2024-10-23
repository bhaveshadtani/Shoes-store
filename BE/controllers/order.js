const db = require("../models");
const UserAddress = db.userAddress;
const Order = db.order;
const OrderItem = db.orderItem;
const ProductVariation = db.productVariation;
const Product = db.product;
const Category = db.category;
const Brand = db.brand;
const Size = db.size;
const Color = db.color;
const Image = db.image;

const placeOrder = async (req, res) => {
  const t = await db.sequelize.transaction(); // Start a transaction
  try {
    const {
      orderItems,
      billing_address_id,
      shipping_address_id,
      payment_method_id,
      order_status = "pending",
    } = req.body;

    const loggedUserId = req?.user?.loggedUserId;
    if (!loggedUserId)
      throw new Error("You must be logged in to place an order.");

    // Validate required parameters
    if (
      !orderItems?.length ||
      !billing_address_id ||
      !shipping_address_id ||
      !payment_method_id
    ) {
      throw new Error("Some required parameters are missing!");
    }

    const billing_address = await UserAddress.findByPk(billing_address_id);
    const shipping_address = await UserAddress.findByPk(shipping_address_id);
    if (!billing_address || !shipping_address) {
      throw new Error("Billing or shipping address not found.");
    }

    // Calculate total price based on order items
    const orderItemsData = await Promise.all(
      orderItems.map(async (item) => {
        if (item.quantity == 0)
          throw new Error("Quantity should be greater than 0");
        const itemPrice = await ProductVariation.findByPk(
          item.product_variant_id
        );
        if (!itemPrice) {
          throw new Error(
            `Product variant with ID ${item.product_variant_id} not found.`
          );
        }
        return {
          order_id: null, // Set later after order creation
          product_variant_id: item.product_variant_id,
          quantity: item.quantity,
          price: parseFloat(itemPrice.unit_price) * item.quantity,
        };
      })
    );

    // Calculate total amount
    const total_amount = orderItemsData.reduce(
      (total, item) => total + item.price,
      0
    );

    // Create the order
    const order = await Order.create(
      {
        user_id: loggedUserId,
        payment_method_id,
        order_status: payment_method_id === 5 ? "processing" : order_status,
        total_amount, // Use the calculated total_amount
        billing_address,
        shipping_address,
      },
      { transaction: t }
    );

    // Update orderItemsData with the created order ID
    orderItemsData.forEach((item) => {
      item.order_id = order.id; // Set the order ID for each item
    });

    await OrderItem.bulkCreate(orderItemsData, { transaction: t });

    // Update inventory quantity
    await Promise.all(
      orderItems.map(async (item) => {
        const productVariant = await ProductVariation.findByPk(
          item.product_variant_id
        );
        if (productVariant) {
          const newQuantity = productVariant.quantity - item.quantity;
          if (newQuantity < 0) {
            throw new Error(
              `Insufficient stock for product variant ID ${item.product_variant_id}.`
            );
          }
          await productVariant.update(
            { quantity: newQuantity },
            { transaction: t }
          );
        }
      })
    );

    // Commit the transaction
    await t.commit();

    return res.status(200).json({
      order_id: order.id,
      message: "Your order has been placed successfully!",
    });
  } catch (error) {
    // Rollback the transaction on error
    await t.rollback();
    console.error("Order Placement Error:", error);
    return res.status(400).json({ message: error.message });
  }
};

const viewOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const loggedUserId = req?.user?.loggedUserId;

    if (!loggedUserId) {
      throw new Error("You must be logged in to view an order.");
    }

    const order = await Order.findOne({
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      where: {
        id: orderId,
        user_id: loggedUserId,
      },
      include: [
        {
          model: OrderItem,
          attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
          include: [
            {
              model: ProductVariation,
              include: [
                {
                  model: Product,
                  attributes: {
                    exclude: [
                      "createdAt",
                      "deletedAt",
                      "brand_id",
                      "category_id",
                    ],
                  },
                  include: [
                    {
                      model: Brand,
                      attributes: ["name"],
                    },
                    {
                      model: Category,
                      attributes: ["name"],
                    },
                  ],
                },
                {
                  model: Image,
                  attributes: ["url"],
                  where: { is_main: true },
                },
                {
                  model: Size,
                  attributes: ["size"],
                },
                {
                  model: Color,
                  attributes: ["color"],
                },
              ],
            },
          ],
        },
      ],
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found." });
    }

    // Prepare the response data
    const orderDetails = {
      order_id: order.id,
      user_id: order.user_id,
      payment_method_id: order.payment_method_id,
      order_status: order.order_status,
      total_amount: order.total_amount,
      billing_address: order.billing_address,
      shipping_address: order.shipping_address,
      order_items: order.orderItems.map((item) => ({
        id: item.id,
        product_variant_id: item.product_variant_id,
        quantity: item.quantity,
        price: item.price,
        product: {
          id: item.productVariation.product.id,
          name: item.productVariation.product.name,
          brand: item.productVariation.product.brand.name,
          category: item.productVariation.product.category.name,
          images: item.productVariation.images.map((image) => image.url),
          size: item.productVariation.size.size,
          color: item.productVariation.color.color,
        },
      })),
    };

    return res.status(200).json(orderDetails);
  } catch (error) {
    console.error("Error fetching order details:", error);
    return res.status(500).json({ message: "An error occurred while fetching the order." });
  }
};

module.exports = {
  placeOrder,
  viewOrder,
};
