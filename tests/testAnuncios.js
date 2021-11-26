   
const { Anuncio, sequelize } = require('../database/models');
Anuncio.findAll({include: ["imagens"]}).then(
    data=>{
        const dados = data.map(d => d.toJSON())
        console.log(dados);
        console.log(dados[0]);
        sequelize.close();
    }
)