"use strict";

const shippingAddresseData = require("../helpers/shippingAddresseData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("shippingaddress", shippingAddresseData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("shippingaddress", null, {});
  },
};
