const express = require('express')
const rotas = express.Router()

let celulares = [
                 {'celular':'Iphone 15', 'desc':'Celular custa 10.000.00'},
                 {'celular':'Sansung A14', 'desc':'Celular custa 3.000.00'},
                 {'celular':'Iphone XR', 'desc':'Celular custa 8.000.00'},

]

rotas.get('/', (req,res)=>{
    res.json({ola: 'Bem vindo a nossa loja'})

})

rotas.get('/:celularId', (req, res)=>{
    const celular = req.params.celularId
    const celularI = celulares.find(i => i.celular == celular)
 
    if(!celular){
        res.status(404).json({erro: "Celular nao encontrado", celularPesquisado: celular})
    }else{
        res.status(200).json(celularI)
    }

})

module.exports = rotas