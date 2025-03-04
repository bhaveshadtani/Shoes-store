module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define(
    "cartItem",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cart_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Cart",
          key: "id",
        },
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Product",
          key: "id",
        },
      },
      product_variant_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "ProductVariation",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      timestamps: false,
      tableName: "cartitem",
    }
  );

  // CartItem.sync({ alter: true });
  return CartItem;
};
