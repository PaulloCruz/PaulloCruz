// console.log("este é o primeiro console")

// setInterval(function(){
//         console.log("este é o segundo console")

//     console.log("este é o segundo console")
// },2000)

// console.log("este é o terceiro console")
// const promessa = Promise.resolve(5+5)

// console.log("logica que foi desenvolvida")

// promessa.then(function(value){
//     console.log("A soma "+value)
//     return value
// })
// .then(function(value){
//     console.log("A subtracao -1 = "+(value - 1))
//     return value
// })
// .then(function(value){
//     console.log("A multiplicação x2 = "+(value * 2))
// })
// console.log("Codigo extra")
// Promise.resolve("OLÁ," * 4)
// .then((value)=>{
//     if(Number.isNaN(value)){
//         throw new Error("valores inválidos")
//     }
// }).catch((err)=>{
//     console.log("UM erro aconteceu"+(err))
// })
// function checkNumber(n){
//     return new Promise((resolve, reject)=>{
//         if(n > 20){
//             resolve("o número é maior que 20")

//         }else{
//             reject(new error("número invalido"))
//         }
//     })

// }
// const num1 = checkNumber(25)
// const num2 = checkNumber(10)

// num1.then((value)=>{
//     console.log("o resultado é:"+(value))

// }).catch((err)=>{
//     console.log("Error: "+(err))
// })

// num2.then((value)=>{
//     console.log("o resultado é:"+(value))

// }).catch((err)=>{
//     console.log("Error: "+(err))
// })
// console.log("teste async")
// async function calcularComDelay(x, y){
//     return x * y
// }

// calcularComDelay(3,3)
// .then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//     console.log((err))
// })
function repostacomdelay(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("resolveu a promessa")
        },3000 )
    })
}
async function chamadaDelay(){
    console.log("chamada a promise, e esperando o resultado")
    const resultado = await repostacomdelay()
    console.log("o resultado chegou"+resultado)
}
chamadaDelay()