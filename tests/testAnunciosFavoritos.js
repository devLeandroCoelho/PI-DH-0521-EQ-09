   
const { Anuncio_Favorito, sequelize } = require('../database/models');
Anuncio_Favorito.findAll({include:['anuncios_favoritos_anuncios','anuncios_favoritos_usuarios']}).then(
    data=>{
        console.log(data.map(d => d.toJSON()));
        sequelize.close();
    }
)