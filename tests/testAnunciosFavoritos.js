   
const { Anuncio_Favorito, sequelize } = require('../database/models');
Anuncio_Favorito.findAll().then(
    data=>{
        console.log(data.map(d => d.toJSON()));
        sequelize.close();
    }
)