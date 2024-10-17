const db = require("../models");
const UserAddress = db.userAddress;
const Order = db.order;
const OrderItem = db.orderItem;

// const placeOrder = async (req, res) => {
//   try {
//     const {
//       orderItems,
//       billingAddressId,
//       shippingAddressId,
//       payment_method_id,
//       total_amount,
//     } = req.body;

//     const loggedUserId = req?.user?.loggedUserId;
//     if (!loggedUserId) {
//       throw new Error("You must be logged in to place an order.");
//     }

//     // Validate order items
//     if (!orderItems || orderItems.length === 0) {
//       throw new Error("Order items are required.");
//     }

//     // Validate payment method
//     if (!payment_method_id) {
//       throw new Error("Payment method is required.");
//     }

//     // Validate total amount
//     if (!total_amount || total_amount <= 0) {
//       throw new Error(
//         "Total amount is required and must be greater than zero."
//       );
//     }

//     // Create or update addresses
//     let billingAddress, shippingAddress;
//     if (billingAddressId) {
//       billingAddress = await UserAddress.findByPk(billingAddressId);
//       if (!billingAddress) {
//         throw new Error("Billing address not found.");
//       }
//     } else {
//       const billingAddressData = req.body.billingAddress;
//       if (!billingAddressData) {
//         throw new Error("Billing address is required.");
//       }
//       billingAddress = await UserAddress.create({
//         ...billingAddressData,
//         user_id: loggedUserId,
//       });
//     }

//     if (shippingAddressId) {
//       shippingAddress = await UserAddress.findByPk(shippingAddressId);
//       if (!shippingAddress) {
//         throw new Error("Shipping address not found.");
//       }
//     } else {
//       const shippingAddressData = req.body.shippingAddress;
//       if (!shippingAddressData) {
//         throw new Error("Shipping address is required.");
//       }
//       shippingAddress = await UserAddress.create({
//         ...shippingAddressData,
//         user_id: loggedUserId,
//       });
//     }

//     // Create order
//     const order = await Order.create({
//       user_id: loggedUserId,
//       billing_address_id: billingAddress.id,
//       shipping_address_id: shippingAddress.id,
//       payment_method_id,
//       payment_status: "pending",
//       order_status: "pending",
//       total_amount,
//     });

//     // Create order items
//     await Promise.all(
//       orderItems.map((item) => {
//         return OrderItem.create({
//           order_id: order.id,
//           product_variation_id: item.product_variation_id,
//           quantity: item.quantity,
//         });
//       })
//     );

//     res.status(200).json({
//       message: "Your order placed successfully!",
//     });
//   } catch (error) {
//     console.log(error, "error");
//     res.status(400).json({ message: error.message });
//   }
// };

const placeOrder = async (req, res) => {
  try {
    const {
      orderItems, //
      billingAddress = null,
      shippingAddress,
      payment_method_id, //
      order_status, //
      total_amount,
    } = req.body;

    const loggedUserId = req?.user?.loggedUserId;
    if (!loggedUserId) {
      throw new Error("You must be logged in to place an order.");
    }
    // REQUIRED PARAMSETERS
    const validateParams = (param) => {
      const requiredParams = [
        param.phone_number,
        param.address_line_1,
        param.city,
        param.state,
        param.country,
        param.zip_code,
        param.address_type,
        orderItems,
        payment_method_id,
        total_amount,
      ];

      if (requiredParams.some((param) => !param)) {
        throw new Error("Some parameters are missing!");
      }
    };
    // Check if user already has address
    const user = await UserAddress.findOne({
      where: { user_id: loggedUserId },
    });

    let billingAddrId, shippingAddrId;

    // Handle shipping address
    if (shippingAddress) {
      validateParams(shippingAddress);
      const shippingAddr = await UserAddress.create({
        ...shippingAddress,
        user_id: loggedUserId,
      });
      shippingAddrId = shippingAddr.id;
    }

    // Handle billing address
    if (billingAddress) {
      // If billing address is provided, create a new entry
      if (
        user &&
        user.user_id === loggedUserId &&
        user.address_type === "billing"
      ) {
      } else {
        validateParams(billingAddress);
        const billingAddr = await UserAddress.create({
          ...billingAddress,
          user_id: loggedUserId,
        });
        billingAddrId = billingAddr.id;
      }
    } else if (shippingAddress) {
      // If billing address is the same as shipping, use shipping address ID
      billingAddrId = shippingAddrId;
    }
    // const order = await Order.create({
    //   user_id: loggedUserId,
    //   billing_address_id: billingAddrId,
    //   shipping_address_id: shippingAddrId,
    //   payment_method_id,
    //   payment_status: "pending",
    //   order_status: "pending",
    //   total_amount,
    // });

    // Create order
    const order = await Order.create({
      user_id: loggedUserId,
      billing_address_id: billingAddress.id,
      shipping_address_id: shippingAddress.id,
      payment_method_id,
      payment_status: "pending",
      order_status: "pending",
      total_amount,
    });

    // Create order items
    await Promise.all(
      orderItems.map((item) => {
        return OrderItem.create({
          order_id: order.id,
          product_variation_id: item.product_variation_id,
          quantity: item.quantity,
        });
      })
    );

    res.status(200).json({
      message: "Your order placed successfully!",
    });

    if (order) {
      res.status(200).json({
        user,
        loggedUserId,
        message: "Your order placed successfully!",
      });
    }
  } catch (error) {
    console.log(error, "error");
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  placeOrder,
};
