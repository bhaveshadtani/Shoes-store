"use strict";

const orderData = require("../helpers/orderData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("order", orderData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("order", null, {});
  },
};
