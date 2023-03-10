function TarefaController(app){
    app.get('/tarefa',exibir)
    function exibir(req, res){
        res.send('Exibindo Tarefas')
    }
    app.post('/tarefa',postar)
    function postar(req, res){
        res.send('Inserindo Tarefas')
    }
}
export default TarefaController
