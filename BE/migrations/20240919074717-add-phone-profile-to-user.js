"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("user", "phone_number", {
      type: Sequelize.STRING(20),
      allowNull: false,
    });

    await queryInterface.addColumn("user", "profile_image", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("user", "phone_number");
    await queryInterface.removeColumn("user", "profile_image");
  },
};
