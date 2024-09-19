"use strict";

const lotData = require("../helpers/lotData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("lot", lotData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("lot", null, {});
  },
};
