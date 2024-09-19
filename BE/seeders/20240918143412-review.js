"use strict";

const reviewData = require("../helpers/reviewData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("review", reviewData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("review", null, {});
  },
};
