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
	modelo: (req, res) => {
		res.render('modelo', { title: 'Desapeguei - Modelo' });
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
		carrinho: (req, res) => {
		res.render('carrinho', { title: 'Desapeguei - Carrinho' });
	},
	buscar: (req, res) => {
		res.render('buscar', { title: 'Desapeguei - Buscar' , id: req.params.id});
	}
}