module.exports = (sequelize, DataTypes) => {

  const categoria = sequelize.define(
    'Categoria', {
      nome: DataTypes.STRING,
    }, {
      tableName: "categorias",
      timestamps: false
    }
  );

  categoria.associate = (models) => {

    // Associando usuário com contatos (um usuário possui muitos contatos);
    categoria.hasMany(models.Anuncio, {
      as: 'Categorias_Anuncios',
      foreignKey: 'categoria_id'
    });
  }
  return categoria;

}