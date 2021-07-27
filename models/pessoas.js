const mongoose = require('mongoose')

//configurando o modelo do mongodb
const pessoaSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    pais: {
        type: String,
        require: true
    },
    cidade: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    }
})

const pessoa = mongoose.model('infoPessoa', pessoaSchema)

module.exports = pessoa