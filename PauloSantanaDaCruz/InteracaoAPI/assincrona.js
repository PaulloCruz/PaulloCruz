/*
console.log("Este é o primeiro console")

setTimeout(function(){
        console.log("Este é o segundo console")
    },3000
)
setInterval(function(){
        console.log("Este é o segundo console")
    },2000
)

console.log("Este é o terceiro console")

const promessa = Promise.resolve(5 + 5)

console.log("Lógica que foi desenvolvido")

promessa.then(function(value){
        console.log(`Soma = ${value}`)
        return value
    }
)
.then(function(value){
        console.log(`Subtrair 1 = ${value -1}`)
    return value
    }
)
.then(function(value){
        console.log(`Multiplicar por 2 = ${value * 2}`)
    }
)
//console.log(`código extra`)

Promise.resolve(`ola,` * 4)
.then((value) => {
    if(Number.isNaN(value)){
        throw new Error(`Valores inválidos`)
    }
}
).catch((err) => {
        console.log(`Um erro ocorreu ${err}`)
    }
)

function checkNumber(n){
    return new Promise((resolve, reject) => {
        if(n > 20){
                resolve(`O número é maior que 20`)
            }else{
                reject(new Error(`Número Inválido`))
            }
        }
    )
}
    
const num1 = checkNumber(25)
const num2 = checkNumber(10)
    
num1.then((value) => {
        console.log(`O resultado é :${value}`)
    }
).catch((err) => {
        console.log(`Error: ${err}`)
    }
)
num2.then((value) => {
        console.log(`O resultado é :${value}`)
    }
).catch((err) => {
        console.log(`Error: ${err}`)
    }
)
console.log(`Test async`)

//async await --> torna em uma promise e cria um delay para o resultado
async function calcularComDelay(x, y){
    return x * y
}

calcularComDelay(3, 3)
.then((value) =>{
        console.log(value)
    }
).catch((err) => {
        console.log(`${err}`)
    }
)
*/
function respostaComDelay(){
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve(`resolve promessa`)
                },3000
            )
        }
    )
}

async function chamadaDelay(){
    console.log(`Chamando a promisse, e esperando o resultado`)
    const resultado = await respostaComDelay()
    console.log(`O resultado chegou ${resultado}`)
}
chamadaDelay()  