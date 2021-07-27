const express = require('express')
const pessoa = require('../models/pessoas')

const router = express.Router()

//pegar lista de pessoas do banco de dados
router.get('/pessoas', (req, res) => {
    res.send({type: 'GET'})
})

//adicionar uma nova pessoa ao banco de dados
router.post('/pessoas', async(req, res) => {
    const reqData = req.body
    const novaPessoa = await pessoa.create(reqData) 
    res.json({type: 'POST', data: novaPessoa})
})

//atualizar uma pessoa do banco de dados
router.put('/pessoas/:id', (req, res) => {
    res.send({type: 'PUT'})
})

//deletar uma pessoa do banco de dados
router.delete('/pessoas/:id', (req, res) => {
    res.send({type: 'DELETE'})
})

router.use((req, res) => {
    res.status(404).send('<h1>Error 404 not found :(</h1>')
})

module.exports = router
