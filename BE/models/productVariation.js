module.exports = (sequelize, DataTypes) => {
  const ProductVariation = sequelize.define(
    "productVariation",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Product",
          key: "id",
        },
      },
      size_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Size",
          key: "id",
        },
      },
      color_id: {
        type: DataTypes.INTEGER,
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
      unit_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
        validate: {
          isDecimal: true, // Ensure price is a decimal
          min: 0, // Ensure price is non-negative
        },
      },
    },
    {
      timestamps: false,
      tableName: "productvariation",
    }
  );

  // ProductVariation.sync({alter: true})
  return ProductVariation;
};
