const db = require("../models");
const UserAddress = db.userAddress;
const Order = db.order;

const addEditAddress = async (req, res) => {
  try {
    const { billingAddress = null, shippingAddress } = req.body;
    const loggedUserId = req?.user?.loggedUserId;
    if (!loggedUserId) {
      throw new Error("You must be logged in to add/edit address.");
    }

    // REQUIRED PARAMSETERS
    const requiredParams = [shippingAddress];

    if (requiredParams.some((param) => !param))
      throw new Error("Some parameters are missing!");

    // Check if user already has address
    const user = await UserAddress.findAll({
      where: { user_id: 9 },
    });

    // Check address_type of the user

    res.status(200).json({ user });
  } catch (error) {
    console.log(error, "error");
    res.status(400).json({ message: error.message });
  }
};

const placeOrder = async (req, res) => {
  try {
    const {
      orderItems, //
      // billingAddress = null,
      // shippingAddress,
      payment_method_id, //
      order_status, //
      total_amount,
    } = req.body;

    const loggedUserId = req?.user?.loggedUserId;
    if (!loggedUserId) {
      throw new Error("You must be logged in to place an order.");
    }
    // REQUIRED PARAMSETERS
    const requiredParams = [
      orderItems,
      shippingAddress,
      payment_method_id,
      total_amount,
    ];

    if (requiredParams.some((param) => !param))
      throw new Error("Some parameters are missing!");

    // Check if user already has address
    const user = await UserAddress.findOne({
      where: { user_id: loggedUserId },
    });

    let billingAddrId, shippingAddrId;

    // Handle shipping address
    if (shippingAddress) {
      const shippingAddr = await UserAddress.create({
        ...shippingAddress,
        user_id: loggedUserId,
        address_type: "shipping",
      });
      shippingAddrId = shippingAddr.id;
    }

    // Handle billing address
    if (billingAddress && user) {
      // If billing address is provided, create a new entry
      const billingAddr = await UserAddress.create({
        ...billingAddress,
        user_id: loggedUserId,
        address_type: "billing",
      });
      billingAddrId = billingAddr.id;
    } else if (shippingAddress) {
      // If billing address is the same as shipping, use shipping address ID
      billingAddrId = shippingAddrId;
    }
    const order = await Order.create({
      user_id: loggedUserId,
      billing_address_id: billingAddrId,
      shipping_address_id: shippingAddrId,
      payment_method_id,
      payment_status: "pending",
      order_status: "pending",
      total_amount,
    });

    if (order) {
      res.status(200).json({
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
  addEditAddress,
  placeOrder,
};
