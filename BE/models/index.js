"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config");
const db = {};
let sequelize;

sequelize = new Sequelize(config);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected... ");
  })
  .catch((err) => console.log(err));

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./user")(sequelize, DataTypes);
db.product = require("./product")(sequelize, DataTypes);
db.cart = require("./cart")(sequelize, DataTypes);
db.cartItem = require("./cartItem")(sequelize, DataTypes);
db.order = require("./order")(sequelize, DataTypes);
db.orderItem = require("./orderItem")(sequelize, DataTypes);
db.productVariation = require("./productVariation")(sequelize, DataTypes);
db.coupon = require("./coupon")(sequelize, DataTypes);
db.review = require("./review")(sequelize, DataTypes);
db.shippingAddress = require("./shippingAddress")(sequelize, DataTypes);
db.size = require("./size")(sequelize, DataTypes);
db.color = require("./color")(sequelize, DataTypes);
db.productColor = require("./productColor")(sequelize, DataTypes);
db.lot = require("./lot")(sequelize, DataTypes);
db.inventory = require("./inventory")(sequelize, DataTypes);
db.payment = require("./payment")(sequelize, DataTypes);
db.paymentMethod = require("./paymentMethod")(sequelize, DataTypes);
db.brand = require("./brand")(sequelize, DataTypes);
db.category = require("./category")(sequelize, DataTypes);
db.productSize = require("./productSize")(sequelize, DataTypes);
db.image = require("./image")(sequelize, DataTypes);

// ASSOCIATIONS
db.category.hasMany(db.product, {
  foreignKey: "category_id",
  onDelete: "RESTRICT", // Prevent deletion of the category if it has products
});
db.product.belongsTo(db.category, { foreignKey: "category_id" });

db.brand.hasMany(db.product, { foreignKey: "brand_id" });
db.product.belongsTo(db.brand, { foreignKey: "brand_id" });

db.product.hasMany(db.productVariation, {
  foreignKey: "product_id",
  onDelete: "CASCADE", // Deletes all products variations when the product is deleted
});
db.productVariation.belongsTo(db.product, { foreignKey: "product_id" });

db.size.hasMany(db.productVariation, { foreignKey: "size_id" });
db.productVariation.belongsTo(db.size, { foreignKey: "size_id" });

db.color.hasMany(db.productVariation, { foreignKey: "color_id" });
db.productVariation.belongsTo(db.color, { foreignKey: "color_id" });

db.productVariation.hasMany(db.review, {
  foreignKey: "product_variant_id",
  onDelete: "CASCADE",
});
db.review.belongsTo(db.productVariation, {
  foreignKey: "product_variant_id",
});

db.user.hasMany(db.review, { foreignKey: "user_id", onDelete: "CASCADE" });
db.review.belongsTo(db.user, { foreignKey: "user_id" });

db.productVariation.hasMany(db.image, {
  foreignKey: "product_variant_id",
  onDelete: "CASCADE",
});
db.image.belongsTo(db.productVariation, { foreignKey: "product_variant_id" });

db.cart.hasMany(db.cartItem, { foreignKey: "cart_id", onDelete: "CASCADE" });
db.cartItem.belongsTo(db.cart, { foreignKey: "cart_id" });

db.product.hasMany(db.cartItem, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});
db.cartItem.belongsTo(db.product, { foreignKey: "product_id" });

db.productVariation.hasOne(db.cartItem, {
  foreignKey: "product_variant_id",
  onDelete: "CASCADE",
});
db.cartItem.belongsTo(db.productVariation, {
  foreignKey: "product_variant_id",
});

// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("Table altered successfully");
//   })
//   .catch((err) => console.log(err));

module.exports = db;
