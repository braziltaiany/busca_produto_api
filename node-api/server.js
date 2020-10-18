const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

require('dotenv').config(); //config dotenv - variavel de ambiente

//iniciando o app
const app = express();

//permissão para criação de arquivos json para api rest
app.use(express.json());

//permissão de acesso para os dominios, habilitado para todas as origens
app.use(cors());

//iniciando o DATABASE
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

//require de todos os arquivos em models
requireDir('./src/models/');

//Rotas
//  use aceita todos os tipos de requisição
app.use('/api', require('./src/routes'));

app.listen(3001);
