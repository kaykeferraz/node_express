const express= require("express")
const path = require("path")

const app =express()

const caminhoBasse = path.join(__dirname,"templates")

app.post('/cadastrar/salvar', (requisicao,resposta) =>{
    console.log(requisicao,body)
})

app.get('/cadastrar', (requisicao, resposta) =>{
    resposta.sendFile(`${caminhoBasse}/cadastrar.html`)
})

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