const db = require("../models");
const UserAddress = db.userAddress;

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

    // Function to create a new address
    const createAddress = async (address) => {
      const getShippingAddressCount = await UserAddress.count({
        where: { user_id: loggedUserId, address_type: "shipping" },
      });
      if (getShippingAddressCount >= 4) {
        throw new Error("You can add upto four shipping addresses.");
      }
      return await UserAddress.create({
        user_id: loggedUserId,
        ...address,
      });
    };

    // Function to update an existing address
    const updateAddress = async (address, address_id) => {
      await UserAddress.update(address, { where: { id: address_id } });
      return {
        address_id,
        message: `${address.address_type} address updated successfully.`,
      };
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

        return await updateAddress(address, address_id);
      } else {
        // Create a new address
        const existingBilling = await findBillingAddress();
        if (!existingBilling) {
          await UserAddress.create({
            user_id: loggedUserId,
            ...address,
            address_type: "billing",
          });
        }
        return await createAddress(address);
      }
    };

    // Process billing or shipping address
    const address = billingAddress || shippingAddress;
    if (!address) {
      return res.status(400).json({
        status: false,
        message: "No address provided.",
      });
    }

    validateParams(address);
    const result = await addOrUpdateAddress(address);

    return res.status(200).json({ status: true, data: { result } });
  } catch (error) {
    console.error("Error:", error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

const getAddresses = async (req, res) => {
  try {
    const loggedUserId = req?.user?.loggedUserId;
    if (!loggedUserId) {
      return res.status(401).json({
        status: false,
        message: "You must be logged in to view addresses.",
      });
    }
    const addresses = await UserAddress.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      where: { user_id: loggedUserId },
      order: [["updated_at", "DESC"]],
    });

    const formatBillingResponse = await addresses.filter(
      (address) => address.address_type === "billing"
    );
    const formatShippingResponse = await addresses.filter(
      (address) => address.address_type === "shipping"
    );

    if (addresses.length === 0) {
      return res.status(200).json({
        status: true,
        message: "It looks like you don't have any saved addresses.",
      });
    }

    return res.status(200).json({
      status: true,
      data: {
        billingAddress: formatBillingResponse,
        shippingAddress: formatShippingResponse,
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      status: false,
      message: "An error occurred while retrieving addresses.",
    });
  }
};

const removeAddress = async (req, res) => {
  try {
    const { address_id } = req.params;
    const loggedUserId = req?.user?.loggedUserId;

    if (!loggedUserId) {
      return res.status(401).json({
        status: false,
        message: "You must be logged in to remove addresses.",
      });
    }

    // Find the address by primary key and user ID
    const address = await UserAddress.findOne({
      where: {
        id: address_id,
        user_id: loggedUserId,
      },
    });

    if (!address) {
      return res.status(404).json({
        status: false,
        message: "Address not found or unauthorized.",
      });
    }

    // Delete the address
    const removeAdd = await address.destroy();
    if (!removeAdd) {
      return res.status(400).json({
        status: false,
        message: "Something went wrong.",
      });
    }
    return res.status(200).json({
      status: true,
      message: "Your address has been deleted successfully!",
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      status: false,
      message: "An error occurred while removing the address.",
    });
  }
};

module.exports = {
  addEditAddress,
  getAddresses,
  removeAddress,
};
