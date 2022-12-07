var mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({

  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefone: {
    type: Number,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  
})

const register = mongoose.model('register', registerSchema);

module.exports = register;
