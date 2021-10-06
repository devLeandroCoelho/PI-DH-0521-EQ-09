   
const { Status, sequelize } = require('../database/models');
Status.findAll({include:['Status_Anuncios']}).then(
    data=>{
        console.log(data.map(d => d.toJSON().Status_Anuncios));
        sequelize.close();
    }
)