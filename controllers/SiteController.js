
const {Usuario} = require("../database/models")

module.exports = {




	index: (req, res) => {
		res.render('index', { title: 'Desapeguei - Home' });
	},
	tdu: (req, res) => {
		res.render('termodeuso', { title: 'Desapeguei - Termo de Uso' });
	},
	tdp: (req, res) => {
		res.render('politicaprivacidade', { title: 'Desapeguei - Política de Privacidade' });
	},
	sobre: (req, res) => {
		res.render('sobre', { title: 'Desapeguei - Sobre Nós' });
	},
	contato: (req, res) => {
		res.render('contato', { title: 'Desapeguei - Contato' });
	},
	help: (req, res) => {
		res.render('ajuda', { title: 'Desapeguei - Ajuda' });
	},
	produto: (req, res) => {
		res.render('produto', { title: 'Desapeguei - Produto' });
	},
	cadastroproduto: (req, res) => {
		res.render('cadastroProduto', { title: 'Desapeguei - Cadastro Produto' });
	},
	login: (req, res) => {
		res.render('login', { title: 'Desapeguei - Login' });
	},
	cadastro: (req, res) => {
		res.render('cadastro', { title: 'Desapeguei - Cadastro' });
	},
	perfil: (req, res) => {
		res.render('perfil', { title: 'Desapeguei - Perfil' });
	},
	itens: (req, res) => {
		res.render('itens', { title: 'Desapeguei - Itens' });
	},
	buscar: (req, res) => {
		res.render('buscar', { title: 'Desapeguei - Buscar', id: req.params.id });
	},
	favoritos: (req, res) => {
		res.render('favoritos', { title: 'Desapeguei - Favoritos' });
	},
	addBd: (req, res) => {
		Post.create({
			nome: req.body.nome,
			email: req.body.email,
			cpf: req.body.cpf,
			telefone: req.body.telefone,
			genero: req.body.genero,
			endereco: req.body.endereco,
			senha: req.body.senha
		}).then(function () {
			res.send("Anuncio inserido com sucesso!")
		}).catch(function (erro) {
			res.send("Houve um erro na insercao do anuncio.")

		})
	},
	fazerlogin : async (req, res) => {
		const {email, password} = req.body
		const umUsuario = await Usuario.findOne({where: {email: email}})
		console.log(umUsuario)
		if(umUsuario === null){
			res.redirect("/login")
		}
		req.session.usuario = umUsuario
		res.send('ok')

	}
}	