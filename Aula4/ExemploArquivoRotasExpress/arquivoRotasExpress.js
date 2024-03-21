const express = require('express')
const app = express()
const fs = require('fs')
const porta = 3001
const host = '127.0.0.1'

app.get('/', (req, res) => {
    fs.readFile('inicial.html', (err, arquivo) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(arquivo)
        return res.end()
    })
})

app.get('/cadastro', (req, res) => {
    fs.readFile('cadastro.html', (err, arquivo) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(arquivo)
        return res.end()
    })
})

app.get('/apagar', (req, res) => {
    fs.readFile('apagar.html', (err, arquivo) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(arquivo)
        return res.end()
    })
})

app.get('/alterar', (req, res) => {
    fs.readFile('alterar.html', (err, arquivo) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(arquivo)
        return res.end()
    })
})

app.listen(porta,host, ()=>{console.log('Server run')})