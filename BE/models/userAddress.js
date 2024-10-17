module.exports = (sequelize, DataTypes) => {
  const UserAddress = sequelize.define("userAddress", {
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
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    address_line_1: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address_line_2: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    address_type: {
      type: DataTypes.ENUM("billing", "shipping", "same"),
      allowNull: false,
    },
  });

  // UserAddress.sync({ alter: true });
  return UserAddress;
};
