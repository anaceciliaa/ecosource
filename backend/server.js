var express = require("express");
var app = express();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var mongoose = require("mongoose");
mongoose.connect('mongodb+srv://anacecilia:mGSFNUbVXzOrHyGY@cluster.uyeltcq.mongodb.net/?retryWrites=true&w=majority');
var fs = require('fs');
var register = require("./model/register.js");
var login = require("./model/login.js");


app.use("/", (req, res, next) => {
  try {
    if (req.path == "/login" || req.path == "/register" || req.path == "/") {
      next();
    } else {
      jwt.verify(req.headers.token, 'shhhhh11111', function (err, decoded) {
        if (decoded && decoded.user) {
          req.user = decoded;
          next();
        } else {
          return res.status(401).json({
            errorMessage: 'Usuário não autorizado!',
            status: false
          });
        }
      })
    }
  } catch (e) {
    res.status(400).json({
      errorMessage: 'Algo deu errado!',
      status: false
    });
  }
})

app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    title: 'Apis'
  });
});

/* LOGIN */
app.post("/login", (req, res) => {
  try {
    if (req.body && req.body.email && req.body.senha) {
      user.find({ email: req.body.email }, (err, data) => {
        if (data.length > 0) {

          if (bcrypt.compareSync(data[0].senha, req.body.senha)) {
            checkUserAndGenerateToken(data[0], req, res);
          } else {

            res.status(400).json({
              errorMessage: 'Email ou senha incorretos!',
              status: false
            });
          }

        } else {
          res.status(400).json({
            errorMessage: 'Email ou senha incorretos!',
            status: false
          });
        }
      })
    } else {
      res.status(400).json({
        errorMessage: 'Adicione os valores adequados!',
        status: false
      });
    }
  } catch (e) {
    res.status(400).json({
      errorMessage: 'Algo deu errado!',
      status: false
    });
  }

});

/* REGISTER */
app.post("/register", (req, res) => {
  try {
    if (req.body && req.body.nome && req.body.email && req.body.telefone && req.body.senha) {

      user.find({ email: req.body.email }, (err, data) => {

        if (data.length == 0) {

          let User = new user({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            senha: req.body.senha
          });
          User.save((err, data) => {
            if (err) {
              res.status(400).json({
                errorMessage: err,
                status: false
              });
            } else {
              res.status(200).json({
                status: true,
                title: 'Cadastro feito com sucesso.'
              });
            }
          });

        } else {
          res.status(400).json({
            errorMessage: `UserEmail ${req.body.email} já existe!`,
            status: false
          });
        }

      });

    } else {
      res.status(400).json({
        errorMessage: 'Adicione os valores corretos!',
        status: false
      });
    }
  } catch (e) {
    res.status(400).json({
      errorMessage: 'Algo deu errado!',
      status: false
    });
  }
});

function checkUserAndGenerateToken(data, req, res) {
  jwt.sign({ user: data.email, id: data._id }, 'shhhhh11111', { expiresIn: '1d' }, (err, token) => {
    if (err) {
      res.status(400).json({
        status: false,
        errorMessage: err,
      });
    } else {
      res.json({
        message: 'Login feito com sucesso.',
        token: token,
        status: true
      });
    }
  });
}

app.listen(3000, () => {
  console.log("Server is Runing On port 3000");
});
