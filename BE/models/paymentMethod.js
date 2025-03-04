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
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true, // true for Active, false for Inactive
      comment: "false: Inactive, true: Active",
    },
  },{
    tableName: "paymentmethod",
  });

  return PaymentMethod;
};
