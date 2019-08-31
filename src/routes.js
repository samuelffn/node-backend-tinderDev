const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {  //Rota principal da alicação(/). Recebe a requisição e retorna a resposta.
    return res.send({ message: `Olá ${req.query.name}` });

});

module.exports = routes; //Para poder exportar a variável routes. O nosso server.js poderá usá-la, conhecer essas rotas