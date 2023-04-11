
const router = require('express').Router();
const jwt = require('jsonwebtoken');

//import controllers
const UserController = require('./controllers/UserController')

let keyToken = process.env.KEY_TOKEN

function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, keyToken, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  }


router.post('/login', UserController.login)

router.post('/cliente', authenticateJWT, UserController.cliente)

router.post('/menu', authenticateJWT, UserController.menu)

router.post('/cliente_endereco', authenticateJWT, UserController.cliente_endereco)

router.post('/pesquisar_cliente', authenticateJWT, UserController.pesquisaCliente)

module.exports = router