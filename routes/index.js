var express = require('express');
var router = express.Router();
var authUsuario = require('../middleware/authUsuario')

const SiteController = require('../controllers/SiteController');

/* METODO GET - INDEX */
router.get('/', SiteController.index);
router.get('/termodeuso', SiteController.tdu);
router.get('/politicaprivacidade', SiteController.tdp);
router.get('/sobre', SiteController.sobre);
router.get('/contato', SiteController.contato);
router.get('/ajuda', SiteController.help);
router.get('/produto', SiteController.produto);
router.get('/cadastroproduto',authUsuario, SiteController.cadastroproduto);
router.get('/login', SiteController.login);
router.post('/login', SiteController.fazerlogin)
router.get('/perfil' , SiteController.perfil);
router.get('/favoritos', authUsuario, SiteController.favoritos);
router.get('/itens', SiteController.itens);
router.get('/buscar', SiteController.buscar);
router.get('/buscar/:id', SiteController.buscar);
router.post('/addBd', SiteController.addBd);
router.post('/addproduto', SiteController.addproduto);
router.post('/itens/:id', SiteController.favoritar);

module.exports = router;
