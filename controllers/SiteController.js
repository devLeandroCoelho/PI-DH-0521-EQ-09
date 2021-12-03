
const { Usuario, Anuncio, Anuncio_Favorito, ImagemAnuncio, sequelize, Categoria } = require('../database/models');
const { QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt');


async function getFavoritos (usuario) {
	let favoritos;
	if (usuario == undefined) {
		favoritos = [];

	} else {
		favoritos = await sequelize.query(`
			
				SELECT	 
					a.id ,
					a.titulo as titulo ,
					a.descricao as descricao,
					a.telefone as telefone,
					a.localizacao as localizacao,
					a.valor as valor,
					c.nome as categoria_nome,
					ia.imagem as imagem
		
				FROM anuncios_favoritos af
				INNER JOIN anuncios a ON a.id = af.anuncios_id
				INNER JOIN categorias c ON a.categoria_id = c.id
				LEFT JOIN imagem_anuncios ia ON ia.anuncios_id = a.id
				WHERE af.usuarios_id = ${usuario.id}
				LIMIT 4 ` )

	}
	return favoritos;
}

module.exports = {
	
	
	
	
	index: async (req, res) => {
		
		
		const favoritos = await getFavoritos(req.session.usuario);


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
		LIMIT 10`, { type: QueryTypes.SELECT });
		res.render('index', { title: 'Desapeguei - Home', anunciosMFav, favoritos });
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
	produto: async (req, res) => {
		const favoritos =  await getFavoritos(req.session.usuario);
		const id = req.params.id
		const produtos = await Anuncio.findOne({ where: { id: Number(id) }, include: ["imagens"] })
		res.render('produto', { title: 'Desapeguei - Produto', anuncio: produtos,favoritos  });
	},
	cadastroproduto: (req, res) => {
		res.render('cadastroProduto', { title: 'Desapeguei - Cadastro Produto' });
	},
	login: (req, res) => {
		if (typeof req.session.usuario !== 'undefined' && req.session.usuario) {
			res.redirect('/')
		}
		res.render('login', { title: 'Desapeguei - Login' });
	},
	perfil: (req, res) => {
		res.render('perfil', { title: 'Desapeguei - Perfil' });
	},
	itens: async (req, res) => {
		const { categoria } = req.params
		let produtos = null
		if (typeof (categoria) !== 'undefined') {
			produtos = await Anuncio.findAll({
				limit: 10,
				where: {
					categoria_id: categoria
				},
				include: ["imagens"]
			})
			return res.render('itens', { title: 'Desapeguei - Itens', produtos: produtos  });

		}
		produtos = await Anuncio.findAll({
			limit: 10
		})
		res.render('itens', { title: 'Desapeguei - Itens', produtos: produtos });

	},
	buscar: async (req, res) => {
		const { nomeBusca } = req.query
		const resultBusca = await sequelize.query(
			`SELECT a.id,
               a.titulo,
               a.descricao,
               a.categoria_id,
               a.valor,
               ia.imagem,
			   c.nome as categoria_nome,
               COUNT(*) AS qtdResultBusca
				FROM anuncios a
				LEFT JOIN imagem_anuncios ia ON ia.anuncios_id = a.id
				LEFT JOIN categorias c ON a.categoria_id = c.id
				WHERE titulo LIKE :nomebuscar
				GROUP BY a.id,
                 a.titulo,
                 a.descricao,
                 a.categoria_id,
                 a.valor,
                 ia.imagem,
				 c.nome
			
			ORDER BY COUNT(*) DESC
			LIMIT 10`, { replacements: { nomebuscar: ("%" + nomeBusca + "%") }, type: QueryTypes.SELECT });
		console.log(resultBusca)
			res.render('buscar', { title: 'Desapeguei - Home', resultBusca, nomeBusca });
	},

	addBd: (req, res) => {
		Usuario.create({
			nome: req.body.nome,
			email: req.body.email,
			cpf: req.body.cpf,
			telefone: req.body.telefone,
			genero: req.body.genero,
			endereco: req.body.endereco,
			senha: bcrypt.hashSync(req.body.senha, 10)
		}).then(function () {
			res.send("Cadastro inserido com sucesso!")
			res.redirect('/')
		}).catch(function (erro) {
			console.log(erro)
			res.send("Houve um erro na insercao do cadastro.")

		})
	},
	addproduto: async (req, res) => {

		try {
			const result = await sequelize.transaction(async (t) => {

				const novoAnuncio = await Anuncio.create({
					usuarios_id: req.session.usuario.id,

					titulo: req.body.title,
					descricao: req.body.description,
					categoria_id: Number(req.body.categoria_id),
					status_id: 2,
					valor: Number(req.body.valor),
					localizacao: req.body.localizacao,
					telefone: "11985488796",
					cpf: "12345678953"

				}, { transaction: t })
				const imagemdoAnuncio = await ImagemAnuncio.create({

					anuncios_id: novoAnuncio.dataValues.id,
					imagem: "/images/" + req.file.filename
				}, { transaction: t })
				return novoAnuncio

			})
			res.send("Anuncio inserido com sucesso!")
		} catch (error) {
			console.log(error)
			res.send("Houve um erro na insercao do anuncio.")

		}

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
		const favoritos = await sequelize.query(`
		SELECT	 
			a.id ,
			af.id as id_favorito,
			a.titulo as titulo ,
			a.descricao as descricao,
			a.telefone as telefone,
			a.localizacao as localizacao,
			a.valor as valor,
			c.nome as categoria_nome,
			ia.imagem as imagem

		FROM anuncios_favoritos af
		INNER JOIN anuncios a ON a.id = af.anuncios_id
		INNER JOIN categorias c ON a.categoria_id = c.id
		LEFT JOIN imagem_anuncios ia ON ia.anuncios_id = a.id
		WHERE af.usuarios_id = ${req.session.usuario.id}`)

		console.log(favoritos)
		res.render('favoritos', { title: 'Desapeguei - Favoritos', favoritos });
	},

	desfavoritar: async (req, res) => {
		const idFavorito = req.params.id
		await Anuncio_Favorito.destroy(
			{where: { id: idFavorito}}
		) 
		res.redirect('/favoritos')
	},

	ultimosAnuncios: async (req, res) => {
		const ultimosAdicionados = await Anuncio.findAll({

			order: [["id", "DESC"]],
			limit: 5
		})
		console.log(ultimosAdicionados)
		res.json(ultimosAdicionados)
	},
	minhaconta: (req, res) => {
		//res.json(req.session.usuario)
		res.render('minhaconta', { title: 'Desapeguei - Minha Conta', usuario: req.session.usuario});
	},

	atualizardados: async (req, res) => {
		const usuarioAtual = req.session.usuario.id 
		const usuarioBanco = await Usuario.findOne(
			{where: {id: usuarioAtual}}
		)
		usuarioBanco.nome = req.body.nome //nome do input obs

		await usuarioBanco.save()
		res.redirect('/minhaconta')
	}



}
