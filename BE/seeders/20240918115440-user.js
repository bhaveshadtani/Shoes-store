"use strict";

const { Chance } = require("chance");
const bcrypt = require("bcrypt");
const userData = require("../helpers/userData");

const chance = new Chance();

module.exports = {
  async up(queryInterface, Sequelize) {
    // const users = [];
    // for (let i = 0; i < 15; i++) {
    //   // Create 15 dummy users
    //   const password = chance.string({
    //     length: 4,
    //     pool: "abcdefghijklmnopqrstuvwxyz",
    //     // alpha: true,
    //     // symbols: true,
    //     // casing: "mixed",
    //   }); // Generate random password
    //   const hashedPassword = await bcrypt.hash(password, 10); // Hash password

    //   users.push({
    //     first_name: chance.first(), // Generate random first name
    //     last_name: chance.last(), // Generate random last name
    //     email: chance.email(), // Generate random email
    //     password: password,
    //     hash_password: hashedPassword,
    //   });
    // }

    await queryInterface.bulkInsert("user", userData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user", null, {});
  },
};
