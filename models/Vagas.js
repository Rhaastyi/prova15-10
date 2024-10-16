import sequelize from '../database.js'
import { DataTypes } from 'sequelize'

const Vagas = sequelize.define('Vagas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    },
    cargo: {
        type: DataTypes.STRING
    },
    cidade: {
        type: DataTypes.STRING
    },
    salario: {
        type: DataTypes.REAL
    }
}, {
    createdAt: false, updatedAt: false, tableName: 'Vagas'
})

export { Vagas }