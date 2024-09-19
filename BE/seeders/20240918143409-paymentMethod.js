"use strict";

const paymentMethodsData = require("../helpers/paymentMethodsData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("paymentmethod", paymentMethodsData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("paymentmethod", null, {});
  },
};
