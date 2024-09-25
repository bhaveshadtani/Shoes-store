module.exports = (sequelize, DataTypes) => {
  const ProductColor = sequelize.define(
    "productColor",
    {
      product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "Product",
          key: "id",
        },
      },
      color_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "Color",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
    }
  );

  // ProductColor.sync({ alter: true });
  return ProductColor;
};
