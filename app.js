import express from 'express'
import vagasRoutes from './routes/vagasRoutes.js'
import conexao from './database.js'

const app = express()

try{
    await conexao.sync()
} catch(e){
    console.log(e)
}

app.use(express.json())
app.use(vagasRoutes)

app.listen(3000, () => console.log('Servidor rodando'))