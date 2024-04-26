// Desenvolva uma API que possibilite o cadastro de funcionários, onde cada funcionário deverá fornecer informações como nome, cargo, CPF, data de nascimento, e-mail, telefone, endereço, data de contratação, salário e habilidades. A API deve oferecer um conjunto completo de operações CRUD (Create, Read, Update, Delete) para gerenciar os funcionários

// 1. **Cadastro de Funcionário**: A API deve permitir o cadastro de um novo funcionário.
// 2. **Listagem de Funcionários**: A API deve permitir listar todos os funcionários cadastrados.
// 3. **Detalhes de um Funcionário**: A API deve permitir obter os detalhes de um funcionário específico com base em seu ID.
// 4. **Atualização de Funcionário**: A API deve permitir atualizar as informações de um funcionário específico com base em seu ID.
// 5. **Exclusão de Funcionário**: A API deve permitir excluir um funcionário específico com base em seu ID.
// 6. **Contagem Total de Funcionários**: A API deve ser capaz de fornecer o número total de funcionários cadastrados.
// 7. **Lista de Funcionários por Cargo**: A API deve permitir listar todos os funcionários de um determinado cargo.
// 8. **Lista de Funcionários por Habilidade**: A API deve permitir listar todos os funcionários que possuam uma determinada habilidade.
// 9. **Lista de Funcionários por Faixa Salarial**: A API deve permitir listar todos os funcionários dentro de uma faixa salarial especificada.

import http from "node:http";
import fs from "node:fs";
const PORT = 3333;

// Codigos
const server = http.createServer((request, response) => {
  const { method, url } = request;

  //em qualquer requisição ele vai no livros.json e ler as informações e coloca em um objto
  fs.readFile("livros.json", "utf8", (err, data) => {
    if (err) {
      response.writeHead(500, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Erro interno do servidor 1" }));
      return;
    }
    let jsonData = [];
    try {
      jsonData = JSON.parse(data);
    } catch (error) {
      console.log(error);
    }

    // Logica

    if (url === "/empregados" && method === "POST") {
      //Cadastrar novo participante
      let body = "";
      request.on("data", (chunk) => {
        body += chunk.toString();
      });
      request.on("end", () => {
        const novoUsuario = JSON.parse(body);
        if (
          novoUsuario.idade >= 16 &&
          novoUsuario.password == novoUsuario.VerificaPassword
        ) {
          novoUsuario.id = jsonData.length + 1;
          jsonData.push(novoLivro);
          fs.writeFile(
            "livros.json",
            JSON.stringify(jsonData, null, 2),
            (err) => {
              if (err) {
                response.writeHead(500, { "Content-Type": "application/json" });
                response.end(
                  JSON.stringify({ message: "erro interno do servidor 2" })
                );
                return;
              }
              response.writeHead(201, { "Content-Type": "applcation/json" });
              response.end(JSON.stringify(novoLivro));
            }
          );
        }
      });
    } else if (url === "/empregados" && method === "GET") {
      // Lista de todos usuarios
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify(jsonData));
    } else if (url === "/participants/count" && method === "GET") {
      //Contar total de usuarios
      const usersCount = users.length;
      if (usersCount == 0) {
        response.setHeader("Content-Type", "application/json");
        response.end(
          JSON.stringify({ message: "Não tem nenhum usuario cadastrado" })
        );
      } else {
        response.setHeader("Content-Type", "application/json");
        response.end(
          JSON.stringify({ message: `Atualmente tem: ${usersCount} usuarios` })
        );
      }
    } else if (url == "/empregados/porCargo/" && method === "GET") {
      //Listar por Cargo
      const cargo = url.split("/")[2];
      const user = jsonData.find((element) => element.cargo == cargo);

      if (user) {
        response.setHeader("Content-Type", "applcation/json");
        response.end(JSON.stringify(user));
      } else {
        // erro porque user não é true
        response.writeHead(404, { "content-Type": "application/json" });
        response.end(
          JSON.stringify({ message: "Erro ao tentar buscar esse usuario" })
        );
      }
    } else if (url == "/empregados/porHabilidade/" && method === "GET") {
      //Listar por habilidade
      const hab = url.split("/")[2];
      const user = jsonData.find((element) => element.habilidades == hab);

      if (user) {
        response.setHeader("Content-Type", "applcation/json");
        response.end(JSON.stringify(user));
      } else {
        // erro porque user não é true
        response.writeHead(404, { "content-Type": "application/json" });
        response.end(
          JSON.stringify({ message: "Erro ao tentar buscar esse usuario" })
        );
      }
    } else if (url.startsWith("/empregados/") && method === "GET") {
      //Buscar usuario especifico (pelo ID)
      const id = url.split("/")[2];
      const user = jsonData.find((element) => element.id == id);
      if (user) {
        response.setHeader("Content-Type", "application/json");
        response.end(JSON.stringify(user));
      } else {
        // error porque user nao é true
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(
          JSON.stringify({ message: "Erro ao tentar buscar esse usuario" })
        );
      }
    } else if (url.startsWith("/participants/") && method === "PUT") {
      // atualizar as informações de usuario específico (pelo ID)
      const id = url.split("/")[2];
      let body = "";
      request.on("data", (chunk) => {
        body += chunk.toString();
      });
      request.on("end", () => {
        const updateUser = JSON.parse(body);
        const index = jsonData.findIndex((user) => user.id == id);
        if (
          index !== -1 &&
          updateUser.idade >= 16 &&
          updateUser.password == updateUser.VerificaPassword &&
          updateUser.password == jsonData[index].password &&
          jsonData[index].idade == updateUser.idade
        ) {
          // se for =-1 é porque deu erro e faz a validação se a idade é menor
          jsonData[index] = { ...jsonData[index], updateUser };
          response.end(JSON.stringify(jsonData[index]));
        } else {
          // erro
          response.writeHead(404, { "Content-Type": "application/json" });
          response.end(
            JSON.stringify({
              message: "Erro, não foi possivel atualizar o usuario'",
            })
          );
        }
      });
    } else if (url.startsWith("/participants/") && method === "DELETE") {
      // Deletar usuario especifico (pelo ID)
      const id = url.split("/")[2];
      const index = jsonData.findIndex((user) => user.id == id);
      if (index !== -1) {
        jsonData.splice(index, 1);
        response.end(JSON.stringify(jsonData));
      } else {
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(
          JSON.stringify({ message: "erro ao deletar esse usuario" })
        );
      }
    } else {
      //Recurso não encontrado
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end;
      JSON.stringify({ message: "Pagina não encontrada" });
    }
  });
});
server.listen(PORT, () => {
  console.log(`Servidor on PORT ${PORT}`);
});
