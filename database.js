import { Sequelize } from 'sequelize'

const conexao = new Sequelize("postgresql://rhaastyi76_gmail_com:Q6KEPLAkcm8UT5dK28kkHA@foil-imp-2477.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full")

try {
    await conexao.authenticate()
    console.log('Conectado com sucesso')
} catch (error) {
    console.error('Erro ao conectar', error)
}

export default conexao
