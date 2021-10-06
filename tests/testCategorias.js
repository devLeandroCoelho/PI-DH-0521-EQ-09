   
const { Categoria, sequelize } = require('../database/models');
Categoria.findAll({include:['Categorias_Anuncios']}).then(
    data=>{
        console.log(data.map(d => d.toJSON()));
        sequelize.close();
    }
)