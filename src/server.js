const express = require('express');
const routes = require('./routes'); // Importando minhas rotas. Como ele está na mesma pasta basta usar ./ para referenciar o caminho

const server = express();  //Criando um servidor do Express para poder manipular rotas

server.use(routes); //use: Utilizado queremos colocar alguma configuração que está em outro arquivo, outro módulo

server.listen(3333); //Setar a porta que o servidor vai ouvir 





//FIX ME: Trecho de código movido para o arquivo routes.js
// GET, POST, PUT, DELETE
/* server.get('/', (req, res) => {  //Rota principal da alicação(/). Recebe a requisição e retorna a resposta.

    //return res.send('Hello World!'); //localhot:3333
    //return res.send(`Hello ${req.query.name}`); //Pegando um dado da url: localhost:3333/?name=Samuel
    return res.send({ message: `Olá ${req.query.name}` }); // Retornando no formato json

}); */
