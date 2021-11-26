let authUsuario = (req, res, next) => {
    if(typeof req.session.usuario === 'undefined'){
        res.redirect('/login')
    }
    next()
}
module.exports = authUsuario