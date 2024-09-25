"use strict";

const productColorData = require("../helpers/productColorData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("productcolor", productColorData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("productcolor", null, {});
  },
};
