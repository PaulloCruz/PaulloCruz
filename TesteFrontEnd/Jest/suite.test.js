function concatenaString(str1, str2){
    return str1 + str2
}

describe("Exercicios de teste", () => {
  test("Verifica se um numero é igual ao outro", () => {
    expect(1).toBe(1);
  }),
    test("Verificar se um valor é estritamente igual", () => {
      expect("1").not.toBe(1);
    }),
    test('Verificar concatenação de string',()=>{
        expect(concatenaString('Tudo', 'Bem?')).toBe('Tudo Bem?');
    });
});
