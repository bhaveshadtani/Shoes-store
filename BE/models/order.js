module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("order", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
      allowNull: false,
    },
    // payment_method_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "PaymentMethod",
    //     key: "id",
    //   },
    //   allowNull: false,
    // },
    payment_method_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "PaymentMethod",
        key: "id",
      },
      allowNull: false,
    },
    // billing_address_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "UserAddress",
    //     key: "id",
    //   },
    //   allowNull: true,
    // },
    // shipping_address_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "UserAddress",
    //     key: "id",
    //   },
    //   allowNull: true,
    // },

    billing_address: {
      type: DataTypes.JSON, // store in JSON
      allowNull: false,
    },
    shipping_address: {
      type: DataTypes.JSON, // store in JSON
      allowNull: false,
    },

    order_status: {
      type: DataTypes.ENUM(
        "pending",
        "processing",
        "shipped",
        "delivered",
        "cancelled"
      ),
      allowNull: false,
      defaultValue: "pending",
    },
    // payment_status: {
    //   type: DataTypes.ENUM("pending", "completed", "failed", "refunded"),
    //   allowNull: false,
    //   defaultValue: "pending",
    // },
    total_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
  });

  // Order.sync({ alter: true });
  return Order;
};
