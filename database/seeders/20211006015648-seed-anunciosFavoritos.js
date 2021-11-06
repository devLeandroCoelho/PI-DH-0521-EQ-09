'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('anuncios_favoritos', [{
        id: 1,
        status_id: 1,
        
      },
      {
        id: 25,
        status_id: 2,
      },
      {
        id: 26,
        status_id: 3,
      },
      {
        id: 27,
        status_id: 4,
      },
      {
        id: 28,
        status_id: 2,
      },
      {
        id: 29,
        status_id: 3,
      },
      {
        id: 36,
        status_id: 2,
      },
      {
        status_id: 4,
      },
      {
        status_id: 2,
      }
    ], );

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('anuncios_favoritos', null, {});
  }
};