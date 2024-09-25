module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "image",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_main: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Product",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );

  // Image.sync({ alter: true });
  return Image;
};
