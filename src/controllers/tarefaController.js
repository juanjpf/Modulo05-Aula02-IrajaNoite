function TarefaController(app){
    app.get('/tarefa',exibir)
    function exibir(req, res){
        res.send('Exibindo Tarefas')
    }
}
export default TarefaController