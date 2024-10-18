const db = require("../models");
const Order = db.order;
const OrderItem = db.orderItem;
const ProductVariation = db.productVariation;

const placeOrder = async (req, res) => {
  const t = await db.sequelize.transaction(); // Start a transaction
  try {
    const {
      orderItems,
      billing_address_id,
      shipping_address_id,
      payment_method_id,
      payment_status = "pending",
      order_status = "pending",
      total_amount,
    } = req.body;

    const loggedUserId = req?.user?.loggedUserId;
    if (!loggedUserId)
      throw new Error("You must be logged in to place an order.");

    // Validate required parameters
    if (
      !orderItems?.length ||
      !billing_address_id ||
      !shipping_address_id ||
      !payment_method_id ||
      !total_amount
    ) {
      throw new Error("Some required parameters are missing!");
    }

    // Create the order
    const order = await Order.create(
      {
        user_id: loggedUserId,
        billing_address_id,
        shipping_address_id,
        payment_method_id,
        payment_status,
        order_status,
        total_amount,
      },
      { transaction: t }
    );

    const orderItemsData = await Promise.all(
      orderItems.map(async (item) => {
        const itemPrice = await ProductVariation.findByPk(
          item.product_variant_id
        );
        return {
          order_id: order.id,
          product_variant_id: item.product_variant_id,
          quantity: item.quantity,
          price: parseFloat(itemPrice.unit_price) * item.quantity,
        };
      })
    );

    await OrderItem.bulkCreate(orderItemsData, { transaction: t });

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

module.exports = {
  placeOrder,
};
