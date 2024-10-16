import { Vagas } from "../models/Vagas.js"

const criarVagas = async (req, res) => {
    try {
        const { titulo, descricao, cargo, cidade, salario } = req.body
        if (!titulo || !descricao || !cargo || !cidade || !salario) {
            // Faltam dados
            return res.status(404).send({ mensagem: 'Favor informar titulo, descricao, cargo, cidade, salario' })
        }

        const vaga = await Vagas.create({ titulo, descricao, cargo, cidade, salario })

        res.status(201).send({ vaga })

    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const listarVagas = async (req, res) => {
    try {
        const resultado = await Vagas.findAll()
        res.status(200).send({ resultado: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const listarVagaPeloId = async (req, res) => {
    try {
        const id = req.params.id
        const resultado = await Vagas.findAll({ where: { id } })
        console.log(resultado)
        res.status(200).send({ resultado: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const listarVagaPeloCargo = async (req, res) => {
    try {
        const cargo = req.params.cargo
        const resultado = await Vagas.findAll({ where: { cargo } })
        res.status(200).send({ resultado: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const listarVagaPelaCidade = async (req, res) => {
    try {
        const cidade = req.params.cidade
        const resultado = await Vagas.findAll({ where: { cidade } })
        res.status(200).send({ resultado: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const atualizarVagas = async (req, res) => {
    try {
        const id = req.params.id
        const { titulo, descricao, cargo, cidade, salario } = req.body
        const resultado = await Vagas.update({ titulo, descricao, cargo, cidade, salario }, { where: { id } })
        res.status(200).send({ mensagem: "Vaga atualizada" })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const apagarVaga = async (req, res) => {
    try {
        const id = req.params.id
        await Vagas.destroy({ where: { id } })
        res.status(200).send({ mensagem: 'vaga apagado com sucesso' })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

export { criarVagas, listarVagas, listarVagaPeloId, listarVagaPeloCargo, listarVagaPelaCidade, atualizarVagas, apagarVaga }