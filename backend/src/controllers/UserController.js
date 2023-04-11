const mysql = require('mysql2');

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'petschifter',
   password: '1234',
   database: 'AFV50'
});

function obtemID() {
   return new Promise((resolve, reject) => {
      connection.query(`SELECT CONNECTION_ID()AS Sessao`, (error, results) => {
         if (error) {
            reject(error);
         }
         resolve(results);
      });
   });
}

let connection_id = null

obtemID().then((results) => {
   connection_id = results[0].Sessao
})


const responseModel = {
   sucess: false,
   data: [],
   error: []
}

module.exports = {

   async create(req, res) {
      const response = { ...responseModel }

      return res.json(response)
   },

   async login(req, res) {
      const jwt = require('jsonwebtoken')

      const emailReq = req.body.email;
      const password = req.body.password;

      let authenticated = false
      let token = "null"
      let keyToken = process.env.KEY_TOKEN
      let dadosUsuario
      let response


      function obtemUsuarios() {
         return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM Usuario WHERE Email = '${emailReq}'`, (error, results) => {
               if (error) {
                  reject(error);
               }
               resolve(results);
            });
         });
      }

      await obtemUsuarios()
         .then((results) => {

            if (Object.keys(results).length === 0) {
               response = { "authenticated": authenticated, token: token, "info": "Email não encontrado" }
            } else if (results[0].Senha !== password) {
               response = { "authenticated": authenticated, token: token, "info": "Senha incorreta" }
            } else {
               //Gera o token e monta a resposta da API

               dadosUsuario = results[0]
               delete dadosUsuario.Senha
               delete dadosUsuario.Telefone
               delete dadosUsuario.TelCelular

               authenticated = true;
               token = jwt.sign(dadosUsuario, keyToken, { expiresIn: '1h' });

               response = { "authenticated": authenticated, token: token, user_data: dadosUsuario, connection_id: connection_id }
            }

         })
         .catch((error) => {
            console.log(error);
         });


      return res.json(response)
   },

   async cliente(req, res) {

      let data;
      let response;

      const codERPReq = req.body.coderp;
      const cpfCnpjReq = req.body.cpfcnpj;

      function obtemCliente() {
         return new Promise((resolve, reject) => {
            let query = `SELECT 
                                 Cliente.IDCliente,
                                 Cliente.CodERP,
                                 Cliente.CPFCNPJ,
                                 Cliente.Razao,
                                 Cliente.Fantasia,
                                 Cliente.Cidade,
                                 Cliente.UFCidade,
                                 Cliente.Situacao,
                                 ClienteFiscal.CNAEPrincipal,
                                 ClienteFiscal.InscricaoEstadual,
                                 ClienteFiscal.NatJuridica,
                                 ClienteFiscal.SitFiscal,
                                 ClienteFiscal.Destinacao,
                                 ClienteFiscal.ContribuinteICMS,
                                 ClienteFiscal.OrgaoPublico,
                                 ClienteEspecial.RegSuframa,
                                 DATE_FORMAT(ClienteEspecial.DataRegSuframa, '%d/%m/%Y') AS DataRegSuframa,
                                 DATE_FORMAT(ClienteEspecial.DataValSuframa, '%d/%m/%Y') AS DataValSuframa,
                                 ClienteEspecial.RegTare,
                                 DATE_FORMAT(ClienteEspecial.DataRegTare, '%d/%m/%Y') AS DataRegTare,
                                 DATE_FORMAT(ClienteEspecial.DataValTare, '%d/%m/%Y') AS DataValTare,
                                 ClienteEspecial.IDCarimbo,
                                 ClienteEspecial.DescricaoCarimbo,
                                 ClienteDado.CEP,
                                 ClienteDado.Logradouro,
                                 ClienteDado.Numero,
                                 ClienteDado.Complemento,
                                 ClienteDado.Bairro,
                                 ClienteDado.CodIBGE,
                                 DATE_FORMAT(ClienteDado.DataFundacao, '%d/%m/%Y') AS DataFundacao,
                                 ClienteDado.TelFixo,
                                 ClienteDado.TelCelular,
                                 ClienteDado.Email
                              FROM Cliente 
                              LEFT JOIN ClienteFiscal
                              ON ClienteFiscal.IDCliente = Cliente.IDCliente
                              LEFT JOIN ClienteEspecial
                              ON ClienteEspecial.IDCliente = Cliente.IDCliente
                              LEFT JOIN ClienteDado
                              ON ClienteDado.IDCliente = Cliente.IDCliente 
                              WHERE CodERP = ? OR CpfCnpj = ?
                              ORDER BY IDCliente DESC
                              LIMIT 1;`
            connection.query(query, [codERPReq, cpfCnpjReq], (error, results) => {
               if (error) {
                  reject(error);
               }
               resolve(results);
            });
         });
      }

      await obtemCliente()
         .then((results) => {
            if (Object.keys(results).length === 0) {
               response = { sucess: false, "info": "Cliente não encontrado" }
            } else {
               data = results;
               response = { sucess: true, data: data }
            }
         })
         .catch((error) => {
            console.log(error);
         });

      return res.json(response)
   },
   async menu(req, res) {

      const idUsuario = req.body.idusuario;

      let data;

      function obtemItensMenu() {

         let query = `SELECT 
                        Menu.IDMenu, 
                        DescMenu, 
                        Visualizar, 
                        Alterar,
                        IDMenuPai
                      FROM Menu
                      LEFT JOIN AcessoPerfilPermissao
                      ON Menu.IDMenu = AcessoPerfilPermissao.IDMenu
                      LEFT JOIN Usuario
                      ON AcessoPerfilPermissao.IDPerfil = Usuario.IDPerfil
                      WHERE (IDUsuario = ? OR IDUsuario IS NULL) AND (Visualizar = 'S' OR Visualizar IS NULL)`

         let procedure = 'CALL APIMenu(?)'

         return new Promise((resolve, reject) => {
            connection.query(procedure, [idUsuario], (error, results) => {
               if (error) {
                  reject(error);
               }
               resolve(results);
            });
         });
      }

      await obtemItensMenu()
         .then((results) => {
            data = results;
         })
         .catch((error) => {
            console.log(error);
         });

      const response = { sucess: true, data: data }

      return res.json(response)
   },
   async menu(req, res) {

      const idUsuario = req.body.idusuario;

      let data;

      function obtemItensMenu() {

         let query = `SELECT 
                      Menu.IDMenu, 
                      DescMenu, 
                      Visualizar, 
                      Alterar,
                      IDMenuPai
                    FROM Menu
                    LEFT JOIN AcessoPerfilPermissao
                    ON Menu.IDMenu = AcessoPerfilPermissao.IDMenu
                    LEFT JOIN Usuario
                    ON AcessoPerfilPermissao.IDPerfil = Usuario.IDPerfil
                    WHERE (IDUsuario = ? OR IDUsuario IS NULL) AND (Visualizar = 'S' OR Visualizar IS NULL)`

         let procedure = 'CALL APIMenu(?)'

         return new Promise((resolve, reject) => {
            connection.query(procedure, [idUsuario], (error, results) => {
               if (error) {
                  reject(error);
               }
               resolve(results);
            });
         });
      }

      await obtemItensMenu()
         .then((results) => {
            data = results;
         })
         .catch((error) => {
            console.log(error);
         });

      const response = { sucess: true, data: data }

      return res.json(response)
   },
   async cliente_endereco(req, res) {

      const idCliente = req.body.idcliente;

      let data;

      function obtemEnderecos() {

         let query = `SELECT *
                     FROM ClienteEndereco
                     WHERE IDCliente = ?`

         return new Promise((resolve, reject) => {
            connection.query(query, [idCliente], (error, results) => {
               if (error) {
                  reject(error);
               }
               resolve(results);
            });
         });
      }

      await obtemEnderecos()
         .then((results) => {
            data = results;
         })
         .catch((error) => {
            console.log(error);
         });

      const response = { sucess: true, data: data }

      return res.json(response)
   },
   async pesquisaCliente(req, res) {

      const pesquisa ='%' + req.body.pesquisa + '%';

      let data;

      function obtemPesquisaCliente() {

         const query = `SELECT * 
                        FROM Cliente 
                        WHERE Fantasia LIKE ?
                        OR Razao LIKE ? 
                        OR CPFCNPJ LIKE ?`

         return new Promise((resolve, reject) => {
            connection.query(query, [pesquisa, pesquisa, pesquisa], (error, results) => {
               if (error) {
                  reject(error);
               }
               resolve(results);
            });
         });
      }

      await obtemPesquisaCliente()
         .then((results) => {
            data = results;
         })
         .catch((error) => {
            console.log(error);
         })
         
         const response = { sucess: true, data: data }

         return res.json(response);
   }
}