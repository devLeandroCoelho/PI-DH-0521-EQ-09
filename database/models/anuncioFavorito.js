module.exports = (sequelize, DataTypes) => {

  const anuncios_favoritos = sequelize.define(
    'Anuncio_Favorito',
    {
      id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
      usuarios_id: { type: DataTypes.INTEGER, allowNull: false },
      anuncios_id: { type: DataTypes.INTEGER, allowNull: false },
      status_id: { type: DataTypes.INTEGER, allowNull: false },
      categoria_id: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
      tableName: "anuncios_favoritos",
      timestamps: false
    }
  );

  anuncios_favoritos.associate = (models) => {
    anuncios_favoritos.belongsTo(
      models.Anuncio,
      {
        as: 'anuncio',
        foreignKey: 'anuncios_id',
      }
    )
    anuncios_favoritos.belongsTo(
      models.Usuario,
      {
        as: 'usuario',
        foreignKey: 'usuarios_id',
      }
    )
    
  }
  return anuncios_favoritos;

}