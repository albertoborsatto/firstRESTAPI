const { findByIdAndDelete } = require("../models/pessoas")

const procuraString = (obj, query, param) => {
    return obj.find(pessoa => {
        if(pessoa[param].toLowerCase().startsWith(query)) {
            return pessoa
        }
    })
}

const procuraNum = (obj, query) => {
    return obj.find(pessoa => {
        if(pessoa['idade'] == query) {
            return pessoa
        }
    })
}

const oqProcurar = (obj, query) => {
    const {nome, email, pais, cidade, idade} = query
    if(nome) return procuraString(obj, nome, 'nome')
    else if(email) return procuraString(obj, email, 'email')
    else if(pais) return procuraString(obj, pais, 'pais')
    else if(cidade) return procuraString(obj, cidade, 'cidade')
    else if(idade) return procuraNum(obj, idade)
    else return obj
}

module.exports = {oqProcurar}