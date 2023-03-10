function UsuarioController(app){
    app.get('/usuario',exibir)
    function exibir(req, res){
        res.send('Exibindo Usuários')
    }
}
export default UsuarioController