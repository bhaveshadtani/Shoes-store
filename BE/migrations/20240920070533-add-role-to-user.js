"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("user", "role", {
      type: Sequelize.ENUM("0", "1", "2"),
      allowNull: false,
      defaultValue: "2", // Default to '2' (Customer),
      comment: "0: Super Admin, 1: Admin, 2: Customer",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("user", "role");
  },
};
