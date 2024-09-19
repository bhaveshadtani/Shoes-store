"use strict";

const couponData = require("../helpers/couponData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("coupon", couponData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("coupon", null, {});
  },
};
