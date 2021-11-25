   
const { Anuncio, sequelize } = require('../database/models');
Anuncio.findAll({include: ["imagens"]}).then(
    data=>{
        console.log(data.map(d => d.toJSON()));
        sequelize.close();
    }
)