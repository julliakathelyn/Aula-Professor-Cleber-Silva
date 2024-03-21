const http = require('http')
const fs = require('fs')
const porta = 3001

const server = http.createServer((req, res) =>{
    fs.readFile('cadastro.html', (err, arquivo)=>{
       res.writeHead(200,{'Content-Type':'text/html'})
       res.write(arquivo)
       return res.end()
    })
})

server.listen(porta,()=>{console.log('Server run')})