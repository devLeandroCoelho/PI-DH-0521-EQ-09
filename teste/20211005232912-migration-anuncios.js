'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'anuncios',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        titulo: { type: Sequelize.DataTypes.STRING(45), allowNull: false },
        usuarios_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'anuncios'
            },
            key: 'id'
          },
            descricao: {type: Sequelize.DataTypes.TEXT},
            valor: {type: Sequelize.DataTypes.DOUBLE},
            localizacao: {type: Sequelize.DataTypes.STRING(45)}  
          },
          categoria_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: {
                tableName: 'categorias'
              },
              key: 'id'
            }
          },
          createdAt: { type: Sequelize.DataTypes.TIMESTAMP },
          updatedAt: { type: Sequelize.DataTypes.TIMESTAMP },
          status_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: {
                tableName: 'status'
              },
              key: 'id'
            }

          },
          descricao: { type: Sequelize.DataTypes.TEXT},
          valor: { type: Sequelize.DataTypes.DOUBLE },
          localizacao: { type: Sequelize.DataTypes.STRING(45) }
        })
      },

  down: async (queryInterface, Sequelize) => {
    return  queryInterface.dropTable('anuncios');
  }
};
