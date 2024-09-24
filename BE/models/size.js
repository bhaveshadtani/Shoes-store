module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define("size", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    timestamps: false,
  });

  // Size.sync({alter: true});
  return Size;
};
