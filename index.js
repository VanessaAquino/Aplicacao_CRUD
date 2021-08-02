const express = require("express");
const app = express();

const port=3000;
const address="localhost"; //localhost é o nome padrão do seu computador, ligado ao IP local 127.0.0.1

const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executano no endereço ${host} e porta ${port}`);
});

