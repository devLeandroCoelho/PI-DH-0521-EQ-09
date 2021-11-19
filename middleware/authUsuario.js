let authUsuario = (req, res, next) => {
    if(typeof req.session.usuario === 'undefined'){
        req.session.url = req.path
        res.redirect('/login')
    }
    next()
}
module.exports = authUsuario