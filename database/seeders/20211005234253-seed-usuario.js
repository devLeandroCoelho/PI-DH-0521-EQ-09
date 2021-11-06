'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('usuarios',
    [
      {
        id: 1,
        nome: 'Sergio',
        cpf: '12343212323',
        telefone: '11987654321',
        genero: 'masculino',
        endereco: 'Rua Banda Mel, 123',
        email: 'sergio@dh.com',
        senha: 'Teacher'
       },
      {
        id: 2,
        nome: 'Myllena',
        cpf: '11991234596',
        genero: 'feminino',
        telefone: '11987654321',
        endereco: 'Rua Victor Konder, 149',
        email: 'myllena@grupo09.com',
        senha: 'MyKa1234'
      },
      {
        id: 3,
        nome: 'Lenix',
        cpf: '11234234596',
        genero: 'masculino',
        telefone: '11977653426',
        endereco: 'Rua Italo Romanes, 8988',
        email: 'lenix@grupo09.com',
        senha: 'Segredo'
      },
      {
        id: 4,
        nome: 'Leandro ',
        cpf: '1125424596',
        genero: 'masculino',
        telefone: '48988547455',
        endereco: 'Rua Visconde de Taunay, 173',
        email: 'leandro@grupo09.com',
        senha: 'Sophie'
      }
    ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('usuarios', null, {});
  }
};
