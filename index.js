const express = require("express");
const app = express();
const routes = require("./routes");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");

const port=3030;
const address = "localhost";

const utils = require("./utils");

const faker = require("faker"); //modulo usado para criar dados fakes aleatorios para testes

// a palavra reservada global cria uma variável ou objeto global para o sistemas. Ele pode ser visto em qualquer parta do código ou dos módulos do projeto. Assim, Users podem ser vistos tanto aqui no index.js quanto em routes.js
global.users =[
    {name:"Ana Lúcia Mendes Paiva", endereco: "Rua Dom Jeronimo, 769", email:"luciluci@gmail.com", login:"lucinha40", idade:"18", altura:"1,83cm"},
    {name:"Marcos Anderson Silva", endereco: "Rua Armindo, 79", email:"marcosilva63@gmail.com",login:"marcos123", idade:"25", altura:"1,65cm"},
    {name:"Julia Almeida Teixeira", endereco: "Rua 789, 79", email:"texeira20@gmail.com",login:"Juju789", idade:"40", altura:"1,73"}];

//ativa uso do EJS e do Express-ejs-layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended:false})); //prepara a aplicacao para receber dados na forma de query string
app.use(express.json()); //prepara a aplicacao para receber dados no formato JSON

//Criando usando rotas simples que estão no arquivo routes.js
app.use('/',routes);

//Criando um servidor simples com o Node.js e o Express

const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});