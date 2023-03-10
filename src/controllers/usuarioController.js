function UsuarioController(app){
    app.get('/usuario',exibir)
    function exibir(req, res){
        res.send('Exibindo Usuários')
    }
    app.post('/usuario',postar)
    function postar(req, res){
        res.send('Inserindo Usuários')
    }
}
export default UsuarioController
