const express = require("express")

let app = express()
app.use(express.json())

app.get('/', function(req,res) {
    return res.send("recebi requisição GET")
})

app.get('/produtos', function(req,res) {
    return res.send("recebi requisição GET")
})

app.get('/filmes/{id} ', function(req,res) {
    return res.send("recebi requisição GET")
})

app.post('/musica/{id}/{autor}/{genero}', function(req,res) {
    return res.send("recebi requisição POST")
})


import bandRoute from "./routes/bandas-rock.js"
bandRoute(app,config)
import filmesRoute from "./routes/filmes.js"
filmesRoute(app,config)


app.listen(3000, function() {
    console.log("Servidor rodando na porta 3000 ...");
})