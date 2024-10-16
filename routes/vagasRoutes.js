import express from 'express'
import {  criarVagas, listarVagas, listarVagaPeloId, listarVagaPelaCidade, atualizarVagas, apagarVaga, listarVagaPeloCargo } from '../controllers/vagaController.js'
const router = express.Router()

router.get('/vagas', listarVagas)
router.get('/vagas/:id', listarVagaPeloId)
router.get('/cargo/:cargo', listarVagaPeloCargo)
router.get('/localizacao/:cidade', listarVagaPelaCidade)
router.post('/vagas', criarVagas)
router.put('/vagas/:id', atualizarVagas)
router.delete('/vagas/:id', apagarVaga)

export default router