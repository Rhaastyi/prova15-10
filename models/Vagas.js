import sequelize from '../database.js'
import { DataTypes } from 'sequelize'

const Vagas = sequelize.define('Vaga', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING, allowNull: false
    },
    descricao: {
        type: DataTypes.STRING, allowNull: false
    },
    cargo: {
        type: DataTypes.STRING, allowNull: false
    },
    cidade: {
        type: DataTypes.STRING, allowNull: false
    },
    salario: {
        type: DataTypes.REAL, allowNull: false
    }
})

export { Vagas }