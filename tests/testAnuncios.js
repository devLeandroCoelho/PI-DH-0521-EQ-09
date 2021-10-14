   
const { Anuncio, sequelize } = require('../database/models');
Anuncio.findAll().then(
    data=>{
        console.log(data.map(d => d.toJSON()));
        sequelize.close();
    }
)