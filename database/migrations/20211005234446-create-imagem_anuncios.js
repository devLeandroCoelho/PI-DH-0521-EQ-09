'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'imagem_anuncios',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        imagem: { type: Sequelize.DataTypes.STRING(100) },
        anuncios_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'anuncios'
            },
            key: 'id'
          }

        }

      })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("imagem_anuncios");
  }
};

