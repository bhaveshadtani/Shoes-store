"use strict";

const imageData = require("../helpers/imageData.js");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("image", imageData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("image", null, {});
  },
};
