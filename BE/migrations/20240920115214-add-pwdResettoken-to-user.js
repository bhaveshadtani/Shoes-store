"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("user", "passwordResetToken", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("user", "passwordResetExpires", {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("user", "passwordResetExpires");
    await queryInterface.removeColumn("user", "passwordResetToken");
  },
};
