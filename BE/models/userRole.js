module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define("userRole", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    tableName: "userrole",
  });

  return UserRole;
};
