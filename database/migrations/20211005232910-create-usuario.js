'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'usuarios',
      {
        id: { type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nome: { type: Sequelize.DataTypes.STRING(45), allowNull: false },
        cpf: { type: Sequelize.DataTypes.STRING(11), allowNull: false },
        genero: { type: Sequelize.DataTypes.STRING(11), allowNull: false },
        email: { type: Sequelize.DataTypes.STRING(45), allowNull: false, unique: true },
        telefone: { type: Sequelize.DataTypes.STRING(12), allowNull: false },
        endereco: { type: Sequelize.DataTypes.STRING(45), allowNull: false },
        senha: { type: Sequelize.DataTypes.STRING(256), allowNull: false },
        complemento: { type: Sequelize.DataTypes.STRING(256) },
       // adicionar o CPF.
      }
    )
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
  }
};
