'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Authors','img','photo')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Authors','photo','img')
  }
};
