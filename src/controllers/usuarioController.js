import Usuario from "../models/usuario.js"
function UsuarioController(app){
    app.get('/usuario',exibir)
    function exibir(req, res){
        const user1= new Usuario('Juan', 'jaynandes@gmail.com', '123')
        res.send(user1)

    }
    app.post('/usuario',inserir)
    function inserir(req, res){
        res.send('Inserindo Usuários')
        console.log(req.body)
    }
}
export default UsuarioController