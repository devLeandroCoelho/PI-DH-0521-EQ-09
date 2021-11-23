'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('anuncios_favoritos', [{
        status_id: 1,
        usuarios_id:1,
        anuncios_id: 1,
        categoria_id: 2,
        
      },
      {

        status_id: 2,
        usuarios_id:1,
        anuncios_id: 1,
        categoria_id: 2,
      },
      {

        status_id: 3,
        usuarios_id:1,
        anuncios_id: 3,
        categoria_id: 1,
      },
      {

        status_id: 4,
        usuarios_id:1,
        anuncios_id: 3,
        categoria_id: 1,
      },
      {

        status_id: 2,
        usuarios_id:1,
        anuncios_id: 1,
        categoria_id: 3,
      },
      {

        status_id: 3,
        usuarios_id:2,
        anuncios_id: 1,
        categoria_id: 3,
      },
      {

        status_id: 2,
        usuarios_id:2,
        anuncios_id: 4,
        categoria_id: 2,
      },
      {
        status_id: 4,
        usuarios_id:3,
        anuncios_id: 4,
        categoria_id: 2,
      },
      {
        status_id: 2,
        usuarios_id:3,
        anuncios_id: 4,
        categoria_id: 2,
      }
    ], );

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('anuncios_favoritos', null, {});
  }
};