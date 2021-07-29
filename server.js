const express = require('express')
const router = require('./routes/api')
const mongoose = require('mongoose')

//utilizando o express
const app = express()

//configurando o mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/pessoas', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {console.log('Sucesso na conexão com o mongodb')})
  .catch(erro => {console.log('Erro ao se conectar com o mongodb: ' + erro)})

app.use(express.json())
app.use('/api', router)
app.use((err, req, res, next) => {
  res.status(422).json({success: false, erro: err.message})
})

//colocando o servidor de pé...
app.listen(5000, () => {
    console.log('Servidor aberto...')
})