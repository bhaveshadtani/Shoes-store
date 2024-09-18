module.exports = (sequelize, DataTypes) => {
  const PaymentMethod = sequelize.define("paymentMethod", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  return PaymentMethod;
};
