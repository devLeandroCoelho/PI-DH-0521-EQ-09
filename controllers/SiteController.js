module.exports = {
	index: (req, res) => {
		res.render('index', { title: 'Desapeguei - Home' });
	},
    produto: (req, res) => {
		res.render('produto', { title: 'Desapeguei - Produto' });
	},
    cadastroproduto: (req, res) => {
		res.render('cadastroproduto', { title: 'Desapeguei - Cadastro Produto' });
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