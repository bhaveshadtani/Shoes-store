module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("review", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Product",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 5,
      },
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },{
    timestamps: false,
  });

  // Review.sync({ alter: true });
  return Review;
};
