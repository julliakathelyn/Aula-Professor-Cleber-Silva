const express = require('express')
const app = express()
const porta = 3001
const host = '127.0.0.1'

app.get('/', (req, resp) =>{
    resp.send('Pagina Inicial')
})

app.get('/cadastro',(req, res)=>{
    res.send('Cadastro de Usuario')
})

app.get('/consulta', (req, res)=>{
    res.send('Consultar Usuario')
})

app.get('/apagar', (req, res)=>{
    res.send('Apagar Usuario')
})

app.get ('/alterar', (req, res)=>{
    res.send('Alterar Usuario')
})

app.listen(porta, host, ()=>{
    console.log('Servidor Rodando')
})