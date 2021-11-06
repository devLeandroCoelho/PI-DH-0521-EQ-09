'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
    'anuncios_favoritos',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        usuarios_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'anuncios'
            },
            key: 'id'
          } 
        },
          status_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: {
                tableName: 'status'
              },
              key: 'id'
            }

          }
      })
  },

  down: async (queryInterface, Sequelize) => {
    return  queryInterface.dropTable('anuncios_favoritos');
  }
};
