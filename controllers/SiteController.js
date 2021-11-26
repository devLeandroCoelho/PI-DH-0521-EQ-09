
const { Usuario, Anuncio, Anuncio_Favorito, ImagemAnuncio, sequelize, Categoria } = require('../database/models');
const { QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt');
//exemplo
// Usuario.findAll().then(
//     data=>{
//         console.log(data.map(d => d.toJSON()));
//         sequelize.close();
//     }
// )

module.exports = {




	index: async (req, res) => {

		const anunciosMFav = await sequelize.query(
	   `SELECT a.id,
               a.titulo,
               a.descricao,
               a.categoria_id,
               a.valor,
               ia.imagem,
               COUNT(*) AS qtdFavoritados
        FROM anuncios a
        INNER JOIN anuncios_favoritos af ON a.id = af.anuncios_id
        LEFT JOIN imagem_anuncios ia ON ia.anuncios_id = a.id
        GROUP BY a.id,
                 a.titulo,
                 a.descricao,
                 a.categoria_id,
                 a.valor,
                 ia.imagem
		ORDER BY COUNT(*) DESC
		LIMIT 10`,{type: QueryTypes.SELECT});
		res.render('index', { title: 'Desapeguei - Home', anunciosMFav });
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
		if(typeof req.session.usuario !== 'undefined' && req.session.usuario){
			res.redirect('/')
		}
		res.render('login', { title: 'Desapeguei - Login' });
	},
	perfil: (req, res) => {
		res.render('perfil', { title: 'Desapeguei - Perfil' });
	},
	itens: async (req, res) => {
		const {categoria} = req.params
		let produtos = null
		if(typeof(categoria) !== 'undefined'){
			produtos = await Anuncio.findAll({
			limit: 10,
			include: {
				as: 'anuncio_categoria',
				model: Categoria,
				where:{
					id: categoria
				}
			}
		})
		return res.render('itens', { title: 'Desapeguei - Itens', produtos: produtos });

		}
		produtos = await Anuncio.findAll({
			limit: 10
		})
		res.render('itens', { title: 'Desapeguei - Itens', produtos: produtos });
		//enviar dois arrays , um para favoritados, outro para recem adicionados, junto com o title.
	},
	buscar: async (req, res) => {
		const resultBusca = await sequelize.query(
	   `SELECT a.id,
               a.titulo,
               a.descricao,
               a.categoria_id,
               a.valor,
               ia.imagem,
               COUNT(*) AS qtdResultBusca
        FROM anuncios a
        LEFT JOIN imagem_anuncios ia ON ia.anuncios_id = a.id
        GROUP BY a.id,
                 a.titulo,
                 a.descricao,
                 a.categoria_id,
                 a.valor,
                 ia.imagem
		ORDER BY COUNT(*) DESC
		LIMIT 50`,{type: QueryTypes.SELECT});
		res.render('buscar', { title: 'Desapeguei - Home', resultBusca });
	},
	// favoritos: async (req, res) => {
	// 	const produtosFavoritados = await Anuncio_Favorito.findAll({
	// 		limit: 10, include: {
	// 		as: 'anuncios_favoritos',
	// 		model: Anuncio}
	// 	})
	// 	console.log(produtosFavoritados)
	// 	res.render('favoritos', { title: 'Desapeguei - Favoritos', favoritos: produtosFavoritados });
	//},
	addBd: (req, res) => {
		Post.create({
			nome: req.body.nome,
			email: req.body.email,
			cpf: req.body.cpf,
			telefone: req.body.telefone,
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
			res.redirect('/index')
		}).catch(function (erro) {
			res.send("Houve um erro na insercao do anuncio.")

		})
	},
	fazerlogin: async (req, res) => {
		const { email, senha } = req.body
		const umUsuario = await Usuario.findOne({ where: { email: email } })
		if (umUsuario === null) {
			//TODO: MANDAR MENSAGEM DE ERRO PARA USUARIO QUE FEZ LOGIN ERRADO
			res.redirect("/login")
		}
		if (bcrypt.compareSync(senha, umUsuario.senha)) {
			delete umUsuario.senha
			req.session.usuario = umUsuario
			res.redirect("/")
		}

	},
	favoritar: async (req, res) => {



		const idFavoritado = req.params.id;
		await Anuncio_Favorito.create({

			anuncios_id: idFavoritado,
			usuarios_id: 1,
			status_id: 2,
			categoria_id: 1
		})
		res.redirect('/favoritos');
	},

	favoritos: async (req, res) => {
		const produtosFavoritados = await Anuncio_Favorito.findAll({
			limit: 10,
			include: [
				{
					

					as: 'anuncios_favoritos',
					model: Anuncio,
					required: true,
					//include: {all:true}
					
					
				},
				{
					as: 'anuncios_favoritos_usuarios',
					model: Usuario,
					required: true,
					where: {
						id: req.session.usuario.id
					},
				}
		]
		})
		console.log(produtosFavoritados)
		res.render('favoritos', { title: 'Desapeguei - Favoritos', favoritos: produtosFavoritados });
	},

	// ordenar pelas datas mais recentes, limintando a 10.
	ultimosAnuncios: async (req, res) => {
		const maisFavoritado = await Anuncio.findAll({
			limit: 10,
		})


	},



}
