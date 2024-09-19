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
db.lot = require("./lot")(sequelize, DataTypes);
db.inventory = require("./inventory")(sequelize, DataTypes);
db.payment = require("./payment")(sequelize, DataTypes);
db.paymentMethod = require("./paymentMethod")(sequelize, DataTypes);

// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("Table altered successfully");
//   })
//   .catch((err) => console.log(err));

module.exports = db;
