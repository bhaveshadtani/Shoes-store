module.exports = (sequelize, DataTypes) => {
  const ProductVariation = sequelize.define("productVariation", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    variation_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    variation_value: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  });

  return ProductVariation;
};
