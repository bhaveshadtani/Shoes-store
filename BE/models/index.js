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

db.User = require("./user")(sequelize, DataTypes);
db.Product = require("./product")(sequelize, DataTypes);
db.Cart = require("./cart")(sequelize, DataTypes);
db.CartItem = require("./cartItem")(sequelize, DataTypes);
db.Coupon = require("./coupon")(sequelize, DataTypes);
db.Inventory = require("./inventory")(sequelize, DataTypes);
db.Lot = require("./lot")(sequelize, DataTypes);
db.Order = require("./order")(sequelize, DataTypes);
db.OrderItem = require("./orderItem")(sequelize, DataTypes);
db.Payment = require("./payment")(sequelize, DataTypes);
db.PaymentMethod = require("./paymentMethod")(sequelize, DataTypes);
db.ProductVariation = require("./productVariation")(sequelize, DataTypes);
db.review = require("./review")(sequelize, DataTypes);
db.shippingAddress = require("./shippingAddress")(sequelize, DataTypes);
db.size = require("./size")(sequelize, DataTypes);

// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("Table altered successfully");
//   })
//   .catch((err) => console.log(err));

module.exports = db;
