const express = require('express')
app = express()
var cors = require('cors')

app.use(cors())

// var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json('application/json'));

// var dataBase = {
//     clientes: [
//         { nome: 'João' },
//         { nome: 'José' },
//         { nome: 'Tiago' }
//     ]
// }

// app.get('/clientes', (req, res) => {
//     res.send(dataBase.clientes)
// })

// app.post('/clientes', (req, res) => {
    
//     if(req.body.cliente.nome){
//         dataBase.clientes.push({nome: req.body.cliente.nome})
//     }

//     res.send(dataBase.clientes)
// })

app.listen(8080)
