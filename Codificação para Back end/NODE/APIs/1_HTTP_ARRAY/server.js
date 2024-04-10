// quando se coloca type module o js entende o export e o import
// {
//     "name": "1_http_array",
//     "version": "1.0.0",
//     "description": "",
//     "main": "server.js",
//     "type": "module", <faz o js entender import e export (localizado em package.json)

import { on } from "node:events";
import http, { request } from "node:http";
const PORT = 333;

//  Metodos:
// sobre os metodos http tem o:
// Get (solicitar informação)
// Post (envia informação)
// Put (atualizar o objeto como um todo)
// Path (atualizar algo especifico)
// Delete (excluir recursos)

/**
 * Requisição
 * 1. corpo da requisição(aplicação) {request.body} {POST}
 * 2. Parametro de busca (Search PARAMS, QUERY PARAMS) {http://localhost:3333/users/2(parametro de busca "2")} {GET}
 * 3. Paramêtros de ROTA (ROUTE PARAMS) - {http://localhost:3333/users/1} {PUT, ÁTH, DELETE}
 *
 */

// Códigos
const users = [];
const server = http.createServer((request, response) => {
  const { method, url } = request;
  if(url === "/users" && method === "GET") {//Buscar todos os usuarios
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(users));
    
  } else if (false) {
    //Busar um unico usuario
  } else if (url === "/users" && method === "POST") {
    //Cadastrar um usuario
    let body = ''
    // on são os escuters, {data:(ele pega tudo que receber, tudo que é dado) Chunks: são os pedacinhos das informações, ele junta tudo nesse chunks; push(novoUsuario): esta adicionando um objeto a novoUsuario, push add coisas } 
    request.on('data',(chunk)=>{
        body+= chunk.toString()
        })
        request.on('end',()=>{
            const novoUsuario = JSON.parse(body)
            novoUsuario.id = '1'
            users.push(novoUsuario)
            response.writeHead(201, r{'Content-Type':'application/json'})
            response.end(JSON.stringify(novoUsuario))
        })

  } else if (true) {
    //Atualizar um usuario
  } else if (true) {
    //deletar um usuário
  } else {
    //Recurso não encontrado
  }
});

server.listen(PORT, () => {
  console.log(`servidor on port ${PORT}`);
});
