const express = require("express");
const router = express.Router();

//Especifica a pasta contendo arquivos estáticos
//0 nome 'public' não precisará ser colocado na rota
//Para serem alcançados os arquivos e pastas que estão dentro dele
//Por isso na imagem que está na página home.ejs só há indicativo para 'imagens
router.use(express.static('public'));