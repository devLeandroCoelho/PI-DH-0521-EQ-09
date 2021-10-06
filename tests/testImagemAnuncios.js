   
const { ImagemAnuncio, sequelize } = require('../database/models');
ImagemAnuncio.findAll().then(
    data=>{
        console.log(data.map(d => d.toJSON()));
        sequelize.close();
    }
)