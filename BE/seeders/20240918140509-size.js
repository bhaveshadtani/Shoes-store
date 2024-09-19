"use strict";

const sizeData = require("../helpers/sizeData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("size", sizeData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("size", null, {});
  },
};
