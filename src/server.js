const express = require("express")
const server = express()

server.use(express.static("public"))

//habilitar o uso do req.body na aplicação, serve para pegar as requisições de um formulário por exemplo
server.unsubscribe(express.urlencoded({extended: true}))

//ligar o servidor
server.listen(3000)

//utilizando templete engine nunjucks
const nunjucks = require("nunjucks")

nunjucks.configure("src/views", {
    express: server,
    noCache: true
})
 //configurar caminhos da aplicação
 // pagina inicial
 server.get("/",(req, res) => {
    return res.render("index.html", { 

    }) // render é exibir na tela (renderizar)
 })