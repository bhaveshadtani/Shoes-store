"use strict";

const userAddresseData = require("../helpers/userAddresseData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("userAddress", userAddresseData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("userAddress", null, {});
  },
};
