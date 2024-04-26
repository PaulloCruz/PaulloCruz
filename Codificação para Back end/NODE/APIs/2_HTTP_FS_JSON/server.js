import http from "node:http";
import fs from "node:fs";
const PORT = 3333;
// titulo, autor, genero, anoPublicação,[personagens],
const server = http.createServer((request, response) => {
  const { url, method } = request;

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
    if (url === "/livros" && method === "GET") {
      //listar info
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(jsonData));
    } else if (url === "/livros" && method === "POST") {
      // cadastrar
      let body = "";
      request.on("data", (chunk) => {
        body += chunk.toString();
      });
      request.on("end", () => {
        // o novo livro recebe as informações do formulario, e antes de enviar essa variavel par ao json coloca ela dentr do array e dps de colocar dentro do array manda pro json, pelo metodo push
        const novoLivro = JSON.parse(body);
        novoLivro.id = uuidv4();
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
        //onde vai escrever; o que é vai mandar pro arquivo(formato json); terceiro params é a função, no json.stringify é onde passa os arquivos, null representa o replace(no caso vai substituir nada), 2 trabalha na formatação
      });
    } else if (url.startsWith("/livros/") && method === "PUT") {
      //atualizar
      const id = url.split("/")[2];
      let body = " ";
      request.on("data", (chunk) => {
        body += chunk.toString();
      });
      request.on("end", () => {
        // request.on é um evento que fica vendo todas as alterações
        const livroAtualizado = JSON.parse(body);

        const index = jsonData.findIndex((livro) => livro.id == id);
        if (index !== -1) {
          jsonData[index] = { ...jsonData[index], ...livroAtualizado };
          fs.writeFile(
            "livros.json",
            JSON.stringify(jsonData, null, 2),
            (err) => {
              if (err) {
                response.writeHead(500, { "Content-Type": "application/json" });
                response.end(
                  JSON.stringify({ message: "erro interno do servidor 3" })
                );
                return;
              }
              response.writeHead(200, { "Content-Type": "applcation/json" });
              response.end(JSON.stringify(jsonData[index]));
            }
          );
        }
      });
    } else if (url.startsWith("/livros/") && method == "DELETE") {
      //DELETE
      const id = url.split("/")[2];
      const index = jsonData.findIndex((livro) => livro.id == id);
      if (index !== 1) {
        jsonData.splice(index, 1);
        fs.writeFile(
          "livros.json",
          JSON.stringify(jsonData, null, 2),
          (err) => {
            if (err) {
              response.writeHead(500, { "Content-Type": "application/json" });
              response.end(
                JSON.stringify({ message: "Erro interno do servidor 4" })
              );
              return;
            }
            response.writeHead(200, { "Content-type": "application/json" });
            response.end(
              JSON.stringify({ message: "Livro removido com sucesso" })
            );
          }
        );
      }
    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Página não encontrada" }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Servidor on PORT ${PORT}`);
});
