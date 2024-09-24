"use strict";

const brandData = require("../helpers/brandData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("brand", brandData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("brand", null, {});
  },
};
