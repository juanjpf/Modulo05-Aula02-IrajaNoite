import express from 'express'
import TarefaController from './controllers/tarefaController.js'
import UsuarioController from './controllers/usuarioController.js'
const app = express()
app.use(express.json())
UsuarioController(app)
TarefaController(app)
export default app