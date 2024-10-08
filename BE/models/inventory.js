module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define("inventory", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_variant_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lot_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  });

  return Inventory;
};
