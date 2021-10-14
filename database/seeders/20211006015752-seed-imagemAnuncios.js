'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('imagem_anuncios', [{
        id: 2,
        imagem: '/imagem0123.jpg',
        capa: 'S',
        anuncio_id: 1
      },
      {
        id: 3,
        imagem: '/img0123.jpg',
        capa: 'N',
        anuncio_id: 1
      },
      {
        id: 4,
        imagem: '/img234.jpg',
        capa: 'N',
        anuncio_id: 1
      },
      {
        id: 5,
        imagem: '/modelo123.jpg',
        capa: 'N',
        anuncio_id: 1
      },
      {
        id: 6,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 2
      },
      {
        id: 7,
        imagem: '/modelo123.jpg',
        capa: 'N',
        anuncio_id: 2
      },
      {
        id: 8,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 3
      },
      {
        id: 9,
        imagem: '/modelo123.jpg',
        capa: 'N',
        anuncio_id: 3
      },
      {
        id: 10,
        imagem: '/modelo123.jpg',
        capa: 'N',
        anuncio_id: 3
      },
      {
        id: 11,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 4
      },
      {
        id: 12,
        imagem: '/modelo123.jpg',
        capa: 'N',
        anuncio_id: 4
      },
      {
        id: 13,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 5
      },
      {
        id: 14,
        imagem: '/modelo123.jpg',
        capa: 'N',
        anuncio_id: 5
      },
      {
        id: 15,
        imagem: '/modelo123.jpg',
        capa: 'N',
        anuncio_id: 5
      },
      {
        id: 16,
        imagem: '/modelo123.jpg',
        capa: 'N',
        anuncio_id: 5
      },
      {
        id: 17,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 6
      },
      {
        id: 18,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 7
      },
      {
        id: 19,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 8
      },
      {
        id: 20,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 9
      },
      {
        id: 21,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 10
      },
      {
        id: 22,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 11
      },
      {
        id: 23,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 12
      },
      {
        id: 24,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 13
      },
      {
        id: 25,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 14
      },
      {
        id: 26,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 15
      },
      {
        id: 27,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 16
      },
      {
        id: 28,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 17
      },
      {
        id: 29,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 18
      },
      {
        id: 30,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 19
      },
      {
        id: 31,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 20
      },
      {
        id: 32,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 21
      },
      {
        id: 33,
        imagem: '/modelo123.jpg',
        capa: 'S',
        anuncio_id: 22
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('imagem_anuncios', null, {});
  }
};