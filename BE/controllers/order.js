const { Op } = require("sequelize");
const db = require("../models");
const UserAddress = db.userAddress;
const Order = db.order;
const OrderItem = db.orderItem;

const addEditAddress = async (req, res) => {
  try {
    const {
      address_id,
      billingAddress = null,
      shippingAddress = null,
    } = req.body;
    const loggedUserId = req?.user?.loggedUserId;

    if (!loggedUserId) {
      throw new Error("You must be logged in to manage addresses.");
    }

    // Helper function to validate required fields in the address
    const validateParams = (address) => {
      const requiredFields = [
        "phone_number",
        "address_line_1",
        "city",
        "state",
        "country",
        "zip_code",
        "address_type",
      ];
      const missingFields = requiredFields.filter((field) => !address[field]);

      if (missingFields.length) {
        throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
      }
    };

    // Find existing billing address (if it exists)
    const findBillingAddress = async () => {
      return await UserAddress.findOne({
        where: { user_id: loggedUserId, address_type: "billing" },
      });
    };

    // Add or update an address (handles both billing and shipping logic)
    const addOrUpdateAddress = async (address) => {
      // If it's a billing address, ensure only one exists
      if (address.address_type === "billing") {
        const existingBilling = await findBillingAddress();
        if (existingBilling && !address_id) {
          throw new Error(
            "You already have a billing address. Please update it instead."
          );
        }
      }

      if (address_id) {
        // Update existing address
        const existingAddress = await UserAddress.findOne({
          where: {
            id: address_id,
            user_id: loggedUserId,
            address_type: address.address_type,
          },
        });

        if (!existingAddress)
          throw new Error("Address not found or unauthorized.");

        await UserAddress.update(address, { where: { id: address_id } });

        return {
          address_id,
          message: `${address.address_type} address updated successfully.`,
        };
      } else {
        // Add new address
        const newAddress = await UserAddress.create({
          user_id: loggedUserId,
          ...address,
        });
        return {
          address_id: newAddress.id,
          message: `${address.address_type} address added successfully.`,
        };
      }
    };

    // Process billing or shipping address
    const address = billingAddress || shippingAddress;
    if (!address) {
      return res.status(400).json({ message: "No address provided." });
    }

    validateParams(address);
    const result = await addOrUpdateAddress(address);

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

// const addEditAddress = async (req, res) => {
//   try {
//     const {
//       address_id,
//       billingAddress = null,
//       shippingAddress = null,
//     } = req.body;
//     const loggedUserId = req?.user?.loggedUserId;

//     if (!loggedUserId) {
//       throw new Error("You must be logged in to manage addresses.");
//     }

//     // Helper function to validate required fields
//     const validateParams = (address) => {
//       const requiredFields = [
//         "phone_number",
//         "address_line_1",
//         "city",
//         "state",
//         "country",
//         "zip_code",
//         "address_type",
//       ];
//       const missingFields = requiredFields.filter((field) => !address[field]);

//       if (missingFields.length) {
//         throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
//       }
//     };

//     // Check if the given address ID exists
//     const findAddressById = async (id) => {
//       return await UserAddress.findOne({
//         where: { id, user_id: loggedUserId },
//       });
//     };

//     // Add or update logic based on address type and ID
//     const addOrUpdateAddress = async (address) => {
//       if (address_id) {
//         const existingAddress = await findAddressById(address_id);

//         if (!existingAddress) {
//           throw new Error(`Address with ID ${address_id} not found.`);
//         }

//         // Update the existing address
//         await UserAddress.update(address, { where: { id: address_id } });

//         return {
//           address_id,
//           message: `${address.address_type} address updated successfully.`,
//         };
//       } else {
//         // Handle new address addition logic
//         if (address.address_type === "billing") {
//           const existingBilling = await UserAddress.findOne({
//             where: { user_id: loggedUserId, address_type: "billing" },
//           });

//           if (existingBilling) {
//             throw new Error(
//               "You already have a billing address. Please update it instead."
//             );
//           }
//         }

//         // If no billing address exists, set the shipping address as 'same'
//         if (address.address_type === "shipping") {
//           const existingBilling = await UserAddress.findOne({
//             where: { user_id: loggedUserId, address_type: "billing" },
//           });

//           if (!existingBilling) {
//             address.address_type = "same";
//           }
//         }

//         // Create a new address
//         const newAddress = await UserAddress.create({
//           user_id: loggedUserId,
//           ...address,
//         });

//         return {
//           address_id: newAddress.id,
//           message: `${address.address_type} address added successfully.`,
//         };
//       }
//     };

//     // Determine which address to process
//     const address = billingAddress || shippingAddress;
//     if (!address) {
//       return res.status(400).json({ message: "No address provided." });
//     }

//     validateParams(address);
//     const result = await addOrUpdateAddress(address);

//     return res.status(200).json(result);
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(400).json({ message: error.message });
//   }
// };

// const addEditAddress = async (req, res) => {
//   try {
//     const {
//       address_id,
//       billingAddress = null,
//       shippingAddress = null,
//       sameAddress = null, // New case for same address
//     } = req.body;
//     const loggedUserId = req?.user?.loggedUserId;

//     if (!loggedUserId) {
//       throw new Error("You must be logged in to manage addresses.");
//     }

//     // Helper function to validate required fields in the address
//     const validateParams = (address) => {
//       const requiredFields = [
//         "phone_number",
//         "address_line_1",
//         "city",
//         "state",
//         "country",
//         "zip_code",
//         "address_type",
//       ];
//       const missingFields = requiredFields.filter((field) => !address[field]);

//       if (missingFields.length) {
//         throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
//       }
//     };

//     // Find existing billing, shipping, or same address
//     const findAddress = async (type) => {
//       return await UserAddress.findOne({
//         where: { user_id: loggedUserId, address_type: type },
//       });
//     };

//     // Handle "same" address splitting into billing and shipping
//     const handleSameAddress = async (address) => {
//       const sameEntry = await findAddress("same");

//       if (sameEntry) {
//         // Change the "same" address type to "shipping"
//         await UserAddress.update(
//           { address_type: "shipping" },
//           { where: { id: sameEntry.id } }
//         );

//         // Create a new "billing" address entry
//         const newBillingAddress = await UserAddress.create({
//           user_id: loggedUserId,
//           ...address,
//           address_type: "billing",
//         });

//         return {
//           shipping_id: sameEntry.id,
//           billing_id: newBillingAddress.id,
//           message: "Same address split into billing and shipping successfully.",
//         };
//       } else {
//         throw new Error("No 'same' address found to split.");
//       }
//     };

//     // Add or update address logic
//     const addOrUpdateAddress = async (address) => {
//       if (address.address_type === "billing") {
//         const existingBilling = await findAddress("billing");
//         if (existingBilling && !address_id) {
//           throw new Error("Billing address already exists. Please update it.");
//         }
//       }

//       if (address_id) {
//         // Update existing address
//         const existingAddress = await UserAddress.findOne({
//           where: {
//             id: address_id,
//             user_id: loggedUserId,
//             address_type: address.address_type,
//           },
//         });

//         if (!existingAddress) {
//           throw new Error("Address not found or unauthorized.");
//         }

//         await UserAddress.update(address, { where: { id: address_id } });

//         return {
//           address_id,
//           message: `${address.address_type} address updated successfully.`,
//         };
//       } else {
//         // Add new address
//         const newAddress = await UserAddress.create({
//           user_id: loggedUserId,
//           ...address,
//         });

//         return {
//           address_id: newAddress.id,
//           message: `${address.address_type} address added successfully.`,
//         };
//       }
//     };

//     // Process the address (billing, shipping, or same)
//     const address = billingAddress || shippingAddress || sameAddress;
//     if (!address) {
//       return res.status(400).json({ message: "No address provided." });
//     }

//     validateParams(address);

//     // Handle the "same" address case
//     if (sameAddress) {
//       const result = await handleSameAddress(sameAddress);
//       return res.status(200).json(result);
//     }

//     // Handle billing or shipping address creation/updation
//     const result = await addOrUpdateAddress(address);

//     return res.status(200).json(result);
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(400).json({ message: error.message });
//   }
// };

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
  addEditAddress,
  placeOrder,
};
