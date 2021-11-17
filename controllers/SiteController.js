
const { Usuario, Anuncio, sequelize } = require('../database/models');
const bcrypt = require('bcrypt');
//exemplo
// Usuario.findAll().then(
//     data=>{
//         console.log(data.map(d => d.toJSON()));
//         sequelize.close();
//     }
// )

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
	 itens: async (req, res) => {
		const todosProdutos = await Anuncio.findAll({
limit:10
		})
		res.render('itens', { title: 'Desapeguei - Itens', produtos: todosProdutos });
		//enviar dois arrays , um para favoritados, outro para recem adicionados, junto com o title.
	},
	buscar: (req, res) => {
		res.render('buscar', { title: 'Desapeguei - Buscar', id: req.params.id });
	},
	favoritos: (req, res) => {
		res.render('favoritos', { title: 'Desapeguei - Favoritos' });
	},
	addBd: (req, res) => {

		console.log(req.body)
		Usuario.create({
			nome: req.body.nome,
			email: req.body.email,
			cpf: req.body.cpf,
			telefone: req.body.telefone,
			complemento: req.body.complemento,
			genero: req.body.genero,
			endereco: req.body.endereco,
			senha: bcrypt.hashSync(req.body.senha, 10)
		}).then(function () {
			res.send("Cadastro inserido com sucesso!")
		}).catch(function (erro) {
			console.log(erro)
			res.send("Houve um erro na insercao do cadastro.")

		})
	},
	addproduto: (req, res) => {
		Anuncio.create({
			usuarios_id: 1,
			// Finalizar o login do sistema, para então alterar depois
			// a  configuração do usuario id no inserir anuncio.
			titulo: req.body.title,
			descricao: req.body.description,
			categoria_id: req.body.categoria_id,
			status_id: 2,
			valor: req.body.valor, 
			localizacao: req.body.localizacao,
			imagem: req.body.file
// telefone:req.body.telefone,

		}).then(function () {
			res.send("Anuncio inserido com sucesso!")
		}).catch(function (erro) {
			console.log(erro)
			res.send("Houve um erro na insercao do anuncio.")

		})

	}
}