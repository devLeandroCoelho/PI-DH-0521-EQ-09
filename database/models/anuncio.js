module.exports = (sequelize, DataTypes) => {

  const anuncios = sequelize.define(
    'Anuncio', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    titulo: DataTypes.STRING,
    usuarios_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    localizacao: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: "anuncios",
  }
  );

  anuncios.associate = (models) => {

    // Associando usuário com contatos (um usuário possui muitos contatos);
    anuncios.belongsTo(
      models.Categoria, {
      as: 'anuncio_categoria',
      foreignKey: 'categoria_id',
    }
    )
    anuncios.belongsTo(
      models.Status, {
      as: 'statusDoAnuncio',
      foreignKey: 'status_id',
    }
    )
    anuncios.belongsTo(
      models.Usuario, {
      as: 'Anuncios_Usuarios',
      foreignKey: 'usuarios_id',
    }
    )
    anuncios.hasMany(
      models.ImagemAnuncio, {
      as: 'imagens',
      foreignKey: 'anuncios_id'
    }
    )
    anuncios.belongsToMany(
      models.Usuario, {
      as: 'usuarios_que_favoritaram',
      through:'anuncios_favoritos',
      foreignKey: 'anuncios_id',
      otherKey: 'usuarios_id'
      }
    )
  }
  return anuncios;

}