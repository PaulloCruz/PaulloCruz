const array = [21, 6, 84, 24, 86, 11, 39, 59, 96]
const array1 = [21, 6, 84, 24, 86, 11, 39, 59, 96]
let index

console.log(array)
// Arrays -> métodos comuns

// inserir dados
array.push(5) //add info no final 
console.log(array)

array.unshift(5/*info q vai add*/)//add info no inicio 
console.log(array)

// remover dados
array.pop()
console.log(array)

array.shift()
console.log(array)

// Listar dados
array.forEach((elemento,indice) => {
    console.log(`${indice} - ${elemento}`)
})
const listarDados= (elemento,indice) => console.log(`${indice} - ${elemento}`)
array.forEach(listarDados)

// Método MAP (percorre todo o array)
console.log(array)
array.map((elemento)=>{
    console.log(elemento *3)
})
const listarMap = elemento => console.log(elemento)
array.map(listarMap)

// Find
const maiorQue30 = array.find((elemento)=>{
    return elemento> 30
})

console.log(maiorQue30)

// Filter 
const maiorQue31 = array.filter((elemento)=>{
    return  elemento>31
})

    console.log(maiorQue31)