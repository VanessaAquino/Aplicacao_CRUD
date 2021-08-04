const express = require("express");
const router = express.Router();
const faker = require("faker");

router.use(express.static('public'));

let db = require("./db");

router.get('/',(req,res)=>{
    res.render('pages/home');//posso omitir a extensão .ejs do home.ejs
    res.send('Página de teste');
});

router.get('/about', (req,res)=>{
    
    let usuarios =[];
    //Usando o Faker para criar 6 perfis para colocar no about
    for(let cont=1;cont<=6;cont++){
        usuarios.push({name:faker.name.findName(),email:faker.internet.email(),avatar:faker.image.image()})
    }
    console.log(usuarios);
    res.render('pages/about',{usuarios});
});

router.get('/curriculo',(req,res)=>{
    res.send('Meu currículo');
});

router.get('/cadastro/insert',(req,res)=>{
    //inserir um usuario
});

router.get('/cadastro/list',(req,res)=>{
    //Lista de usuários cadastrados
})

//Essa linha permite que este código seja exportado como um 
//módulo e possa ser usado em outras partes da aplicação. 
module.exports = router;
