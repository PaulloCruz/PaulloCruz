function soma(a, b){
   const soma = a + b
   if(soma > 5){
    return `valor não permitido ${soma}`
   }else{
    return soma
   }
}

console.log(soma(2,2)) // OK 
console.log(soma(2)) //NaN parametro não completo
console.log(soma()) //NaN parametro não completo
console.log(soma(2,2,2,2,2,2,2,2,2,2,2,2)) //OK só pega os 2 primeiros parametros
console.log(soma(2,5)) 

// Exemplo 02

function multiplicacao(){
    let multi = 1
    for (i in arguments) {
        multi *= arguments[i]
    }
    return multi
}

console.log(multiplicao(5,5))

function triplo(){


    return 3* x
}
// função anonima
let = function(x){
    return 3*x
}

    // arrow function

triplo = (x) => {
    return 3*x
}

        // nessa não precisa usar return
1
triplo = (x) => 3*x;
console.log(triplo(3))

2
oi = (nome) => `Oi, bizonho,${nome}`

console.log(oi('Paulo'))

3
oi = _ => `oi, bizonho `

console.log(oi())

const soma = function(x,y){
    return x+y
}
const subtracao = function(x,y){
    return x-y
}
const resultado = function(a,b, operacao = soma){
    console.log (operacao(a,b))
}

resultado(1,2)

// ele troca se botar outra função
resultado(1,2, subtracao)

resultado(5,5, function(x,y){
    return x*y
})

resultado(3,3, (x,y)=> x / y)