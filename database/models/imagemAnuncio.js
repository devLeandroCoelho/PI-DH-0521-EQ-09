module.exports = (sequelize, DataTypes) =>{

    const imagemAnuncios = sequelize.define(
        'ImagemAnuncio',
        {
            imagem: {type: DataTypes.STRING(100), allowNull: false},
            capa: {type: DataTypes.CHAR, allowNull: false},
            anuncio_id: {type: DataTypes.INTEGER, allowNull: false}
        },
        {
            tableName: "imagem_anuncios",
            timestamps: false
            }
    );

    imagemAnuncios.associate = (models) => {
        imagemAnuncios.belongsTo(
          models.Anuncio,
          {
            as: 'imagem-anuncio_anuncio',
            foreignKey: 'anuncio_id',
          }
        )
    }
    return imagemAnuncios;

}