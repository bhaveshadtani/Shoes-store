module.exports = (sequelize, DataTypes) => {
  const ProductVariation = sequelize.define("productVariation", {
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
  },{
    timestamps: false,
  });

  // ProductVariation.sync({alter: true})
  return ProductVariation;
};
