const data = require('./onibus.json') //faz a importação dos dados com a variavel, para abrir pelo node (ctrl + alt + n)

// - **Listar todas as paradas de uma linha:**
//     - Escreva uma função que aceite o ID da linha como entrada e retorne todas as paradas associadas a essa linha, ordenadas pela ordem de parada.

let idLinha = 2 //1 ou 2


data.linhas.forEach((element,index)=>{
    if (element.id==idLinha) {
        element.paradas.forEach((elements,index)=>{
            
            console.log(elements.nome)
        })
    }
})