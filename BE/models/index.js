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
// db.color = require("./color")(sequelize, DataTypes);
db.lot = require("./lot")(sequelize, DataTypes);
db.inventory = require("./inventory")(sequelize, DataTypes);
db.payment = require("./payment")(sequelize, DataTypes);
db.paymentMethod = require("./paymentMethod")(sequelize, DataTypes);
db.brand = require("./brand")(sequelize, DataTypes);
db.category = require("./category")(sequelize, DataTypes);
db.productSize = require("./productSize")(sequelize, DataTypes);

// ASSOCIATIONS
db.category.hasMany(db.product, { foreignKey: "category_id" });
db.product.belongsTo(db.category, { foreignKey: "category_id" });

db.brand.hasMany(db.product, { foreignKey: "brand_id" });
db.product.belongsTo(db.brand, { foreignKey: "brand_id" });

db.product.belongsToMany(db.size, { through: db.productSize });
db.size.belongsToMany(db.product, { through: db.productSize });

// db.product.belongsToMany(db.color, { through: db.productColor });
// db.color.belongsToMany(db.product, { through: db.productColor });

// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("Table altered successfully");
//   })
//   .catch((err) => console.log(err));

module.exports = db;
