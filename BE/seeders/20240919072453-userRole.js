"use strict";

const userRoleData = require("../helpers/userRoleData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("userrole", userRoleData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("userrole", null, {});
  },
};
