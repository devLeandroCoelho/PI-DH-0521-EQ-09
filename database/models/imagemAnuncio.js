module.exports = (sequelize, DataTypes) =>{

    const imagemAnuncio = sequelize.define(
        'ImagemAnuncio',
        {
            //id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
            imagem: {type: DataTypes.STRING(100), allowNull: false},
            anuncios_id: {type: DataTypes.INTEGER, allowNull: false}
        },
        {
            tableName: "imagem_anuncios",
            timestamps: false,
            }
    );

    imagemAnuncio.associate = (models) => {
        imagemAnuncio.belongsTo(
          models.Anuncio,
          {
            as: 'imagem_anuncio_anuncio',
            foreignKey: 'anuncios_id',
          }
        )
    }
    return imagemAnuncio;

}