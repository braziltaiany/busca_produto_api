const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const products = await Product.find();
    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id); //buscar unico produto
    return res.json(product);
  },

  async store(req, res) {
    const product = await Product.create(req.body); //criação de produto no corpo da requisição

    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }); //atualização do produto

    return res.json(product);
  },

  async destroy(req, res) {
    const product = await Product.findByIdAndRemove(req.params.id); //remoção

    return res.send();
  },
};
