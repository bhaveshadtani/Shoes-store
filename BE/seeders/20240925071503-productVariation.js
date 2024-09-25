"use strict";

const productVariationData = require("../helpers/productVariationData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "productvariation",
      productVariationData,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("productvariation", null, {});
  },
};
