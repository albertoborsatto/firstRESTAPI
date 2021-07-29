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
    let final = obj
    
    if(nome) final = procuraString(obj, nome, 'nome')
    else if(email) final = procuraString(obj, email, 'email')
    else if(pais) final = procuraString(obj, pais, 'pais')
    else if(cidade) final = procuraString(obj, cidade, 'cidade')
    else if(idade) final = procuraNum(obj, idade)
    
    if(final) return final
    else return false
}

module.exports = {oqProcurar}