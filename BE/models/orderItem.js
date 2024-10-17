module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define("orderItem", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Order",
        key: "id",
      },
      allowNull: false,
    },
    product_variant_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "ProductVariation",
        key: "id",
      },
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
  });

  // OrderItem.sync({ alter: true });
  return OrderItem;
};
