const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index); //primeira rota
routes.get('/products/:id', ProductController.show); //rota para busca de um unico produto- DETALHE
routes.post('/products', ProductController.store); //criar algo no servidor
routes.put('/products/:id', ProductController.update); //atualiza produto
routes.delete('/products/:id', ProductController.destroy); //atualiza produto

module.exports = routes; //exportar para utilizar no server.js
