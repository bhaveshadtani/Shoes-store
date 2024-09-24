"use strict";

const categoryData = require("../helpers/categoryData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("category", categoryData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("category", null, {});
  },
};
