import { Sequelize } from 'sequelize'

const conexao = new Sequelize("postgresql://bruno:W7ELAuultBdQkn_y-z2zQw@sleek-elk-1686.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/postgres?sslmode=verify-full")

try {
    await conexao.authenticate()
    console.log('Conectado com sucesso')
} catch (error) {
    console.error('Erro ao conectar', error)
}

export default conexao
