'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('anuncios_favoritos', [{
        id: 1,
        usuarios_id: 1,
        anuncios_id: 1
      },
      {
        id: 25,
        usuarios_id: 1,
        anuncios_id: 2
      },
      {
        id: 26,
        usuarios_id: 1,
        anuncios_id: 3
      },
      {
        id: 27,
        usuarios_id: 1,
        anuncios_id: 4
      },
      {
        id: 28,
        usuarios_id: 1,
        anuncios_id: 5
      },
      {
        id: 29,
        usuarios_id: 1,
        anuncios_id: 19
      },
      {
        id: 36,
        usuarios_id: 2,
        anuncios_id: 19
      },
      {
        id: 37,
        usuarios_id: 3,
        anuncios_id: 3
      },
      {
        id: 38,
        usuarios_id: 3,
        anuncios_id: 21
      }
    ], );

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('anuncios_favoritos', null, {});
  }
};