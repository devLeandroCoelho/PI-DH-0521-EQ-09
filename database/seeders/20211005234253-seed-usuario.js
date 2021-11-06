'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('usuarios',
    [
      {
        id: 1,
        nome: 'Sergio',
        telefone: '11987654321',
        endereco: 'Rua Banda Mel, 123',
        email: 'sergio@dh.com',
        senha: bcrypt.hashSync('Teacher', 10)
      },
      {
        id: 2,
        nome: 'Myllena',
        telefone: '11991234596',
        endereco: 'Rua Victor Konder, 149',
        email: 'myllena@grupo09.com',
        senha: bcrypt.hashSync('MyKa1234', 10)
      },
      {
        id: 3,
        nome: 'Lenix',
        telefone: '11977653426',
        endereco: 'Rua Italo Romanes, 8988',
        email: 'lenix@grupo09.com',
        senha: bcrypt.hashSync('Segredo', 10)
      },
      {
        id: 4,
        nome: 'Leandro ',
        telefone: '48988547455',
        endereco: 'Rua Visconde de Taunay, 173',
        email: 'leandro@grupo09.com',
        senha: bcrypt.hashSync('Sophie', 10)
      }
    ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('usuarios', null, {});
  }
};
