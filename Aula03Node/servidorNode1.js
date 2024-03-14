const http = require('http');

http.createServer((requisicao, resposta)=>{
    resposta.writeHead(200, {'Content-Type': 'text/plain'})
    resposta.write('Ola mundooo\n')
    resposta.end()

}).listen(3000)