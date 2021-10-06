   
const { Anuncio, sequelize } = require('../database/models');
Anuncio.findAll({include:['anuncio_categoria','statusDoAnuncio','Anuncios_Usuarios']}).then(
    data=>{
        console.log(data.map(d => d.toJSON()));
        sequelize.close();
    }
)