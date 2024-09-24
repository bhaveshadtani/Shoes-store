module.exports = (sequelize, DataTypes) => {
  const ProductSize = sequelize.define(
    "productSize",
    {
      product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "Product",
          key: "id",
        },
      },
      size_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "Size",
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

  // ProductSize.sync({ alter: true });
  return ProductSize;
};
