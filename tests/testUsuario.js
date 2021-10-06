   
const { Usuario, sequelize } = require('../database/models');
Usuario.findAll().then(
    data=>{
        console.log(data.map(d => d.toJSON()));
        sequelize.close();
    }
)