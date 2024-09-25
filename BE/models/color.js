module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define("color", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    timestamps: false,
  });

  // Color.sync({alter: true});
  return Color;
};
