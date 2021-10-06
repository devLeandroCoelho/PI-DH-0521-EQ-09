   
const { Categoria, sequelize } = require('../database/models');
Categoria.findAll().then(
    data=>{
        console.log(data.map(d => d.toJSON()));
        sequelize.close();
    }
)