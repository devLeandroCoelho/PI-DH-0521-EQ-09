'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('imagem_anuncios', [{
      imagem: '/images/tablet.png',
      anuncios_id: 1,
    },
    {
      imagem: '/images/playstation.png',
      anuncios_id: 2,
    },
    {
      imagem: '/images/mesa-de-escritorio.png',
      anuncios_id: 3,
    },
    {
      imagem: '/images/cadeira-gamer.png',
      anuncios_id: 4,
    },
    
    //   imagem: '/images/armario-de-ferro.png',
    //   anuncios_id: 5
    // },
    // {
    //   imagem: '/images/notebookhp.png',
    //   anuncios_id: 6
  ])

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('imagem_anuncios', null, {});
  }
};