'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('imagem_anuncios', [{
      imagem: '/public/images/tablet.png',
      anuncios_id: 1
    },
    {
      imagem: '/public/images/playstation.png',
      anuncios_id: 1
    },
    {
      imagem: '/public/images/mesa-de-escritorio.png',
      anuncios_id: 1
    },
    {
      imagem: '/public/images/cadeira-gamer.png',
      anuncios_id: 1
    },
    {
      imagem: '/public/images/armario-de-ferro.png',
      anuncios_id: 2
    },
    {
      imagem: '/public/images/cadeira-gamer.png',
      anuncios_id: 2
    },
    {
      imagem: '/public/',
      anuncios_id: 3
    },
    {
      imagem: '/modelo123.jpg',
      anuncios_id: 3
    },
    {
      imagem: '/modelo123.jpg',
      anuncios_id: 3
    },
    {
      imagem: '/modelo123.jpg',
      anuncios_id: 4
    },
    {
      imagem: '/modelo123.jpg',
      anuncios_id: 4
    },
    {
      imagem: '/modelo123.jpg',
      anuncios_id: 5
    },
    {
      imagem: '/modelo123.jpg',
      anuncios_id: 5
    },
    {
      imagem: '/modelo123.jpg',
      anuncios_id: 5
    },
    {
      imagem: '/modelo123.jpg',
      anuncios_id: 5
    },
    {
      imagem: '/modelo123.jpg',
      anuncios_id: 6
    },
    {
      imagem: '/modelo123.jpg',
      anuncios_id: 7
    },
    {
      imagem: '/modelo123.jpg',
      anuncios_id: 8
    },
    {
      imagem: '/modelo123.jpg',
      anuncios_id: 9
    },
    {
      imagem: '/modelo123.jpg',
      anuncios_id: 15
    },
    {
      imagem: '/modelo123.jpg',
      anuncios_id: 16
    },
    {
      imagem: '/modelo123.jpg',
      anuncios_id: 17
    }])

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('imagem_anuncios', null, {});
  }
};