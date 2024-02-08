const dados = require('./dados.json')
const express = require('express')
const fs = require('fs')

const server = express()

server.use(express.json())

server.listen(3000, () => {
    console.log("O servidor está funcional");
})

server.get('/', (req, res) => {
    return res.json({mensagem: "Estou funcionando!"})
})

server.get('/usuarios', (req, res) =>{
    return res.json(dados.Usuarios)
})