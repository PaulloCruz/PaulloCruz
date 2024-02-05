let obj = {
    pessoa: 'Paulo',
    enderecos: [
        {
            estado: 'alagoas',
            cidade: 'maceió',
            rua: '0',
            numero: 22,
        },

        {
            estado: 'alagoas',
            cidade: 'maceió',
            rua: '1',
            numero: 24,
        },

        {
            estado: 'alagoas',
            cidade: 'maceió',
            rua: '2',
            numero: 26,
        } 
    ]
}
const geral = obj.enderecos.forEach((elemento,indice)=>{    
    console.log(`${indice+1} - ${elemento.numero}`)

})

console.log(geral)