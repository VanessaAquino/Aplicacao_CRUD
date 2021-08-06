const express = require("express");
const app = express();
const routes = require("./routes");
const expressLayouts = require("express-ejs-layouts");

const port=3030;
const address="localhost"; //localhost é o nome padrão do seu computador, ligado ao IP local 127.0.0.1

app.use(routes)

//Ativa uso do EJS e do Express-ejs-layouts
app.set('view engine','ejs');
app.use(expressLayouts);

//Criando usando rotas simples que estão no arquivo routes.js
app.use('/',routes);


const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executano no endereço ${host} e porta ${port}`);
});

