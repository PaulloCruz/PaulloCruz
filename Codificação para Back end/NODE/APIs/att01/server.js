import { resolveNaptr } from "node:dns";
import http, { request } from "node:http";
import { stringify } from "node:querystring";
const PORT = 3333;

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
 * 2. Parametro de busca (Search PARAMS, QUERY PARAMS) {    users/2(parametro de busca "2")} {GET}
 * 3. Paramêtros de ROTA (ROUTE PARAMS) - {http://localhost:3333/users/1} {PUT, PATH, DELETE} 
 */

// Códigos
const users = [];
const server = http.createServer((request, response) => {
  const { method, url } = request;
//   logica

  if (url==='/participants' && method==="POST") {//Cadastrar novo participante
        let body = ''
        request.on('data',(chunk)=>{
            body+= chunk.toString()
            })
            request.on('end',()=>{
                const novoUsuario = JSON.parse(body)
                if(novoUsuario.idade>=16){
                    novoUsuario.id = users.length+1
                    users.push(novoUsuario)
                    response.writeHead(201, {'Content-Type':'application/json'})
                    response.end(JSON.stringify(novoUsuario))
                }else{
                    // error
                    response.writeHead(404,{"Content-Type":"application/json"})
                    response.end(JSON.stringify({message:'Erro ao tentar cadastrar usuario [idade menor que 16]'}))
                  }
                
            })
    }
    else if(url==='/participants' && method==="GET"){//Lista de todos usuarios
        response.setHeader("Content-Type", "application/json");
        response.end(JSON.stringify(users));
    }
    else if(url.startsWith('/participants/') && method==="GET"){//Buscar usuario especifico (pelo ID)
        const id= url.split('/')[2]
        const user = users.find((element)=>element.id==id)
        if(user){
        response.setHeader("Content-Type", "application/json");
        response.end(JSON.stringify(user))        
 ''       }else{
            // error porque user nao é true
            response.writeHead(404,{"Content-Type":"application/json"})
            response.end(JSON.stringify({message:"Erro ao tentar buscar esse usuario"}))
        }
    }
    else if(url.startsWith('/participants/') && method=="PUT"){// atualizar as informações de usuario específico (pelo ID)
        const id = url.split('/')[2]
        let body = ''
        request.on('data',(chunk)=>{
            body += chunk.toString()
          })
          request.on('end',()=>{
          const updateUser = JSON.parse(body)  
          const index = users.findIndex((user)=> user.id == id)
          if(index!==-1 && updateUser.idade >=16 && updateUser.senha == users[index].senha){// se for =-1 é porque deu erro e faz a validação se a idade é menor                
                users[index]= {...users[index],updateUser}
                response.end(JSON.stringify(users[index]))
            }else{
                // erro
                response.writeHead(404,{"Content-Type":"application/json"})
                response.end(JSON.stringify({message:"Erro, não foi possivel atualizar o usuario'"}))
            }
          }
        )
    }
    else if(false){// Deletar usuario especifico (pelo ID)
    }
    else if(false){//Contar total de usuarios
    }
    else if(false){//Contar quantos usuarios são maiores de 18
    }
    else if(false){//Identificar cidade com maior numero de usuarios

    } else {
    //Recurso não encontrado
    response.writeHead(404,{"Content-Type":"application/json"})
    response.end
      JSON.stringify({message:"Pagina não encontrada"})
  }
});

server.listen(PORT, () => {
  console.log(`servidor on port ${PORT}`);
});
