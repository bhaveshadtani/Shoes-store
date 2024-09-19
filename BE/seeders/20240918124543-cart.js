"use strict";

const cartData = require("../helpers/cartData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cart", cartData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cart", null, {});
  },
};
