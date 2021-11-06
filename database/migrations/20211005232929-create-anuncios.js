'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'anuncios', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      titulo: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
      },
      usuarios_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'usuarios'
          },
          key: 'id'
        },
      },
      descricao: {
        type: Sequelize.DataTypes.TEXT
      },
      valor: {
        type: Sequelize.DataTypes.DOUBLE
      },
      localizacao: {
        type: Sequelize.DataTypes.STRING(45)
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
      createdAt: {
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('anuncios');
  }
};