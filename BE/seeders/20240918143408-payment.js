"use strict";

const paymentData = require("../helpers/paymentData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("payment", paymentData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("payment", null, {});
  },
};
