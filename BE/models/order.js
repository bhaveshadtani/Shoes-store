module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("order", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    billing_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    shipping_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    order_status: {
      type: DataTypes.ENUM("pending", "processing", "shipped", "delivered"),
      allowNull: false,
      defaultValue: "pending",
    },
    total_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
  });

  return Order;
};
