const express= require("express")
const path = require("path")

const app =express()

const caminhoBasse = path.join(__dirname,"templates")

app.get('/Usuarios/:id', (requisicao, resposta) => {

    const id = requisicao.params.id

    console.log('Acessando dados de usuarios ${id}')

    resposta.sendFile(`${caminhoBasse}/Usuarios.html`)
})

app.get('/',(requisicao,resposta)=> {
    resposta.sendFile(`${caminhoBasse}/index.html`)
  
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})