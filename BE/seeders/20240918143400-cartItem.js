"use strict";

const cartItemData = require("../helpers/cartItemData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cartitem", cartItemData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cartitem", null, {});
  },
};
