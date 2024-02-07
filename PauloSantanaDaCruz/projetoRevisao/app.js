const inNumero = document.querySelector('#inNumero')
const outTabuda = document.querySelector('#outTabuada')
const btnMostrar = document.querySelector('#btnMostrar')

btnMostrar.addEventListener("click",()=>{
 let numero = inNumero.value
 console.log(numero)

 if (numero===0 || isNaN(numero)) {
    alert("Digite um numero valido")
    inNumero.focus()
    return
    
 }
for (let i = 1; i <=10; i++) {
    console.log(numero*i)
    
}
let resposta = ''
for (let i = 1; i <=10; i++){
    resposta = `${resposta+numero} x ${i} = ${numero*i}` 
}
outTabuda.innerHTML = `${resposta}`
})