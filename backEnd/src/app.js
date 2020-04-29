const express = require('express'); // instancia a lib express
const routes = require ('./routes');
const { errors } = require('celebrate');
const cors = require('cors');
const app = express();

app.use(cors()); 
// com a opção ORIGIN poderá filtrar quem poderá acessar o backend
app.use(express.json()); // antes das rotas e ir no corpo identificar o json e converter para JS
// como criar rotas ?
// app.get('/'); // rota raiz
// app.get('/contato'); // rota (recurso)

// app.get('/', (request, response) => {
// return response.send('HELLO ARROTA!');
// }); // passar função como parametro. primeiro parametro requisição, segundo resposta

/**
 * Métodos HTTP:
 * 
 * GET : Buscar uma informação do back-end    *SELECT
 * POST: Criar  uma informação no back-end    *INSERT
 * PUT: Alterar uma informação no back-end    *UPDATE
 * DELETE: Deletar uma informação no back end *DELETE
 */

//  cada requisição é por get 

/**
 * Tipos de paramêtros:
 * Query Params: Parâmetros noemados enviados na rota após a "?" (Filtros e paginação) ex: /user?name=José
 *  const params = request.query; 
 *
 * Route Params: Parâmetros utilizados para identificar recursos (único, como o id) ex: /user/:id
 *  const params = request.params;
 *  
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos ex: /user
 *  const body = request.body;
 */

//  REQUEST guarda todos os dados que vem da requisição do usuário
//  RESPONSE retorna a resposta ao usuário

app.use(routes);
app.use(errors());

module.exports = app;
//app.listen(3333); // enxerga a porta para localhost