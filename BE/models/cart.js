module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "cart",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );

  // Cart.sync({ alter: true });
  return Cart;
};
