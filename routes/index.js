var express = require('express');
var router = express.Router();

const SiteController = require('../controllers/SiteController');

/* METODO GET - INDEX */
router.get('/', SiteController.index);
router.get('/termodeuso', SiteController.tdu);
router.get('/politicaprivacidade', SiteController.tdp);
router.get('/sobre', SiteController.sobre);
router.get('/contato', SiteController.contato);
router.get('/ajuda', SiteController.help);
router.get('/produto', SiteController.produto);
router.get('/cadastroproduto', SiteController.cadastroproduto);
router.get('/login', SiteController.login);
router.get('/cadastro', SiteController.cadastro);
router.get('/perfil', SiteController.perfil);
router.get('/favoritos', SiteController.favoritos);
router.get('/itens', SiteController.itens);
router.get('/buscar', SiteController.buscar);
router.get('/buscar/:id', SiteController.buscar);
router.post('/addBb', SiteController.addBd);


module.exports = router;
