"use strict";

const colorData = require("../helpers/colorData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("color", colorData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("color", null, {});
  },
};
