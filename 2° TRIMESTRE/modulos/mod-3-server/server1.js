const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')
const porta = 8005

const server = http.createServer1((req,res) =>{

    const urltratada = new URL(req.url, `https://${req.headers.host}`)
    const recurso = urltratada.pathname 

    if (recurso === '/'){
        res.statusCode = 200 
    res.setheaders('content-type', 'text/html; charset=utf-8')
    res.end('bem vindo(a)! \nhomepage \\o/') 
    } else {
        res.statusCode = 401
        res.setheaders('content-type', 'text/html; charset=utf-8')
        res.end('401 Não autorizado')
    }
})

server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})
