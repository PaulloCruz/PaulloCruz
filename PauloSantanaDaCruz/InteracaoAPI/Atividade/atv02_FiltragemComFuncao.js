const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]

const maiorQue3 = palavras.filter((elemento)=>{
    return  elemento.length>3
})

console.log(maiorQue3)