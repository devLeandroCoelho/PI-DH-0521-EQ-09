module.exports = (sequelize, DataTypes) =>{

    const imagemAnuncios = sequelize.define(
        'ImagemAnuncio',
        {
            imagem: {type: DataTypes.STRING(100), allowNull: false},
            capa: {type: DataTypes.CHAR, allowNull: false},
            anuncios_id: {type: DataTypes.INTEGER, allowNull: false}
        },
        {
            tableName: "imagem_anuncios",
            timestamps: false
            }
    );

    imagemAnuncios.associate = (models) => {
        imagemAnuncios.belongsTo(
          models.Anuncios,
          {
            as: 'imagem-anuncio_anuncio',
            foreignKey: 'anuncios_id',
          }
        )
    }
    return imagemAnuncios;

}