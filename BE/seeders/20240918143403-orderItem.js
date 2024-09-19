"use strict";

const orderItemData = require("../helpers/orderItemData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("orderitem", orderItemData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orderitem", null, {});
  },
};
