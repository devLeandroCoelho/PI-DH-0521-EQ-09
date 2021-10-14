   
const { Status, sequelize } = require('../database/models');
// Status.findAll({include:['Status_Anuncios']}).then(
Status.findAll().then(
    data=>{
        console.log(data.map(d => d.toJSON()));
        sequelize.close();
    }
)