module.exports = {
	index: (req, res) => {
		res.render('index', { title: 'Desapeguei - Home' });
	},
	tdu: (req, res) => {
		res.render('termodeuso', { title: 'Desapeguei - Termo de Uso' });
	},
	help: (req, res) => {
		res.render('ajuda', { title: 'Desapeguei - Termo de Uso' });
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