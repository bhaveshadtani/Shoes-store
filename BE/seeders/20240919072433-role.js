"use strict";

const roleData = require("../helpers/roleData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("role", roleData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("role", null, {});
  },
};
