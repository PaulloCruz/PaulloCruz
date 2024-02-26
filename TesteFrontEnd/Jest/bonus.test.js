const bonus = require("./index")

describe('Testa a função Bonus',()=>{
    test('Verifica se o bônus de 10% é adicionado',()=>{
        const salario = 1000

        const salarioComBonus= bonus(salario)

        expect(salarioComBonus).toBe(11000)
    })
})