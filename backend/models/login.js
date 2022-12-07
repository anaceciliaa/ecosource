import mongoose from '../database/index.js';

const loginSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  
})

const login = mongoose.model('login', loginSchema);

module.exports = login;
