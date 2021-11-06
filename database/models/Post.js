const db = require('./db')


const Post = db.sequelize.define('usuarios', {

nome: {

type: db.Sequelize.STRING

},

cpf: {

type: db.Sequelize.STRING

},


email: {

type: db.Sequelize.STRING

},

telefone: {

type: db.Sequelize.STRING

},

senha: {

type: db.Sequelize.STRING

},

genero: {

type: db.Sequelize.STRING

}

})

module.exports = Post;
