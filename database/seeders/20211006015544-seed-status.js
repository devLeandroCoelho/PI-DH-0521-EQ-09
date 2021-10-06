'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('status',
      [{
          id: 1,
          nome: 'Iniciado'
        },
        {
          id: 2,
          nome: 'Publicado'
        },
        {
          id: 3,
          nome: 'Pausado'
        },
        {
          id: 4,
          nome: 'Cancelado'
        },
        {
          id: 5,
          nome: 'Vendido'
        }
      ], );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('status', null, {});
  }
};