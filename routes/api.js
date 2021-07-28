const express = require('express')
const pessoa = require('../models/pessoas')

const router = express.Router()

//pegar todas as pessoas do banco de dados
router.get('/pessoas', async(req, res, next) => {
    try {
        const pessoas = await pessoa.find({})
        res.json({type: 'GET', success: true, data: pessoas})
    } catch(err) {next(err)}
})

//retorna uma pessoa específica do banco de dados
router.get('/pessoas/:id', async(req, res, next) => {
    const {id} = req.params
    try {
        const umaPessoa = await pessoa.findById(id)
        res.json({type: 'GET', success: true, data: umaPessoa})
    } catch(err) {next(err)}
})

//adicionar uma nova pessoa ao banco de dados
router.post('/pessoas', async(req, res, next) => {
    const reqData = req.body
    try {
        const novaPessoa = await pessoa.create(reqData)
        res.json({type: 'POST', success: true, data: novaPessoa})
    } catch(err) {next(err)}
})

//atualizar uma pessoa do banco de dados
router.put('/pessoas/:id', async(req, res, next) => {
    const reqData = req.body
    const {id} = req.params
    try {
        const atualizaPessoa = await pessoa.findByIdAndUpdate(id, reqData, {new: true})
        res.json({type: 'PUT', success: true, update: atualizaPessoa})
    } catch(err) {next(err)}
})

//deletar uma pessoa do banco de dados
router.delete('/pessoas/:id', async(req, res, next) => {
    const {id} = req.params
    try {
        const deletaPessoa = await pessoa.findByIdAndRemove({_id: id})
        res.json({type: 'DELETE', success: true, deleted: deletaPessoa})
    } catch(err) {next(err)}
})


module.exports = router
