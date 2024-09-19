module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("role", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role: {
      type: DataTypes.ENUM("0", "1", "2"),
      allowNull: false,
      defaultValue: "2", // Default to '2' (Customer),
      comment: "0: Super Admin, 1: Admin, 2: Customer",
    },
  });

  return Role;
};
