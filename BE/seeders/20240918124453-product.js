"use strict";

const { Chance } = require("chance");
const productData = require("../helpers/productData");
const chance = new Chance();

module.exports = {
  async up(queryInterface, Sequelize) {
    // const products = [];
    // for (let i = 0; i < 15; i++) {
    //   products.push({
    //     name: chance.word({ length: 8 }), // Generate a random product name
    //     description: chance.sentence({ words: 12 }), // Generate a random product description
    //     price: chance.floating({ min: 1, max: 100, fixed: 2 }), // Generate a random price
    //     image_url: `https://via.placeholder.com/640x480?text=Product+${i + 1}`, // Placeholder image URL
    //     category: chance.word(), // Generate a random category
    //     brand: chance.word(), // Generate a random brand
    //     is_active: chance.bool(), // Randomly set active status
    //     is_featured: chance.bool(), // Randomly set featured status
    //   });
    // }

    console.log(productData, "Product");
    await queryInterface.bulkInsert("product", productData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product", null, {});
  },
};
