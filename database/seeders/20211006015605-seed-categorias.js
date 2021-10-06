'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categorias', [{
        id: 1,
        nome: 'Cadeiras'
      },
      {
        id: 2,
        nome: 'Mesas'
      },
      {
        id: 3,
        nome: 'Armários'
      },
      {
        id: 4,
        nome: 'Camas'
      },
      {
        id: 5,
        nome: 'Acessórios'
      },
      {
        id: 6,
        nome: 'Eletrônicos'
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('categorias', null, {});
  }
};