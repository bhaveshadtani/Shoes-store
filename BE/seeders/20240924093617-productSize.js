"use strict";

const productSizeData = require("../helpers/productSizeData");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("productsize", productSizeData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("productsize", null, {});
  },
};
