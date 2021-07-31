const express = require('express')
const router = require('./routes/api')
const mongoose = require('mongoose')
const morgan = require('morgan')

//utilizando o express
const app = express()

//configurando o mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/pessoas', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {console.log('Sucesso na conexão com o mongodb')})
  .catch(erro => {console.log('Erro ao se conectar com o mongodb: ' + erro)})

//middleware para receber JSON das requisições POST e PUT
app.use(express.json())

//middleware para receber data do index.html
app.use(express.urlencoded({extended: false}))

//utilização dos arquivos html e css nas respostas
app.use(express.static('public'))

//utilizando morgan para dar o callback das requisições
app.use(morgan('dev'))

//utilização das rotas no servidor
app.use(router)

//middleware para tratar erros ao utilizar dados do mongoDB
app.use((err, req, res, next) => {
  res.status(422).json({success: false, erro: err.message})
})

//colocando o servidor de pé...
app.listen(5000, () => {
    console.log('Servidor aberto...')
})