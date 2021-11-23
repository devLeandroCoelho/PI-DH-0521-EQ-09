'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('imagem_anuncios', [{
      id: 2,
      imagem: '/public/images/tablet.png',
      capa: 'S',
      anuncios_id: 1
    },
    {
      id: 2,
      imagem: '/public/images/playstation.png',
      capa: 'N',
      anuncios_id: 1
    },
    {
      id: 3,
      imagem: '/public/images/mesa-de-escritorio',
      capa: 'N',
      anuncios_id: 1
    },
    {
      id: 4,
      imagem: '/public/images/cadeira-gamer',
      capa: 'N',
      anuncios_id: 1
    },
    {
      id: 5,
      imagem: '/public/images/armario-de-ferro',
      capa: 'S',
      anuncios_id: 2
    },
    {
      id: 6,
      imagem: '/public/images/cadeira-gamer.png',
      capa: 'N',
      anuncios_id: 2
    },
    {
      id: 7,
      imagem: '/public/',
      capa: 'S',
      anuncios_id: 3
    },
    {
      id: 8,
      imagem: '/modelo123.jpg',
      capa: 'N',
      anuncios_id: 3
    },
    {
      id: 9,
      imagem: '/modelo123.jpg',
      capa: 'N',
      anuncios_id: 3
    },
    {
      id: 10,
      imagem: '/modelo123.jpg',
      capa: 'S',
      anuncios_id: 4
    },
    {
      id: 11,
      imagem: '/modelo123.jpg',
      capa: 'N',
      anuncios_id: 4
    },
    {
      id: 12,
      imagem: '/modelo123.jpg',
      capa: 'S',
      anuncios_id: 5
    },
    {
      id: 13,
      imagem: '/modelo123.jpg',
      capa: 'N',
      anuncios_id: 5
    },
    {
      id: 14,
      imagem: '/modelo123.jpg',
      capa: 'N',
      anuncios_id: 5
    },
    {
      id: 15,
      imagem: '/modelo123.jpg',
      capa: 'N',
      anuncios_id: 5
    },
    {
      id: 16,
      imagem: '/modelo123.jpg',
      capa: 'S',
      anuncios_id: 6
    },
    {
      id: 17,
      imagem: '/modelo123.jpg',
      capa: 'S',
      anuncios_id: 7
    },
    {
      id: 18,
      imagem: '/modelo123.jpg',
      capa: 'S',
      anuncios_id: 8
    },
    {
      id: 19,
      imagem: '/modelo123.jpg',
      capa: 'S',
      anuncios_id: 9
    },
    {
      id: 20,
      imagem: '/modelo123.jpg',
      capa: 'S',
      anuncios_id: 10
    },
    {
      id: 21,
      imagem: '/modelo123.jpg',
      capa: 'S',
      anuncios_id: 11
    },
    {
      id: 22,
      imagem: '/modelo123.jpg',
      capa: 'S',
      anuncios_id: 12
    }])

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('imagem_anuncios', null, {});
  }
};