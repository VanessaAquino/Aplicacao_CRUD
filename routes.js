const express = require("express");
const router = express.Router();
const app = express();

// const faker = require("faker");

// let db = require("./db");

//db.criarDB("minhaBaseDados");

//Especifica a pasta contendo arquivos estáticos. 
//O nome 'public' não precisará ser colocado na rota 
//Para serem alcançados os arquivos e pastas que estão dentro dele. 
//Por isso na imagem que está na página home.ejs só há o indicativo para 'images'
router.use(express.static('public'));



//Exemplode Rotas: 
/*

http://localhost:3030/css
http://localhost:3030/images
http://localhost:3030/index.html

/ = http://localhost:3030/
/about = http://localhost:3030/about
/curriculo =  http://localhost:3030/cadastro

*/
router.get('/',(req,res)=>{
    res.render('pages/home');
});

router.get('/about',(req,res)=>{

    res.render('pages/about');
});

router.get('/cadastro/remove/:id',(req,res)=>{
    res.send('Remoção realizada com sucesso');

});

router.get('/cadastro/update/:id',(req,res)=>{
    res.send('Atualização realizada com sucesso');

});

router.get('/cadastro',(req,res)=>{ //callback - função que trata determinado evento
    let users = [
        {name:"Ana Lúcia Mendes Paiva", endereco: "Rua Dom Jeronimo, 769", email:"luciluci@gmail.com", login:"lucinha40", idade:"18", altura:"1,83cm"},
        {name:"Marcos Anderson Silva", endereco: "Rua Armindo, 79", email:"marcosilva63@gmail.com",login:"marcos123", idade:"25", altura:"1,65cm"},
        {name:"Julia Almeida Teixeira", endereco: "Rua 789, 79", email:"texeira20@gmail.com",login:"Juju789", idade:"40", altura:"1,73"}
    ];
    res.render('pages/cadastro',{users});
});

router.get('/cadastro/insert',(req,res)=>{
    let usuario={name: "", email: ""};
    /* for(let cont=1;cont<=6;cont++){
        usuarios.push({name:faker.name.findName(),email: faker.internet.email(),avatar: faker.image.image()});
    } */

    let result = db.inserirDado(usuariusers);
    console.log(result);
    //res.render('pages/insert',{result});
});

router.get('/cadastro/list',(req,res)=>{

});

//Essa linha permite que este código seja exportado como um módulo e possa ser usado em outras partes da aplicação.
module.exports = router;