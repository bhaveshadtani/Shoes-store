module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define("size", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    size: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  });

  return Size;
};
