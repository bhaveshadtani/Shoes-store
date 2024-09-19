"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("role", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      role: {
        type: Sequelize.ENUM("0", "1", "2"),
        allowNull: false,
        defaultValue: "2", // Default to '2' (Customer),
        comment: "0: Super Admin, 1: Admin, 2: Customer",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true, // This is used for soft deletes
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("role");
  },
};
