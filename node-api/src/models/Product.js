// Dentro do product estão os schemas desse models: que são campos que
//um produto pode ter e quais são os valores que vão salvar
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.plugin(mongoosePaginate);

//registrar um model na aplicação
mongoose.model('Product', ProductSchema);
