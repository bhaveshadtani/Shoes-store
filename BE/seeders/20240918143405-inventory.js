"use strict";

const inventoryData = require("../helpers/inventoryData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("inventory", inventoryData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("inventory", null, {});
  },
};
