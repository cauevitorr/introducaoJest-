//Intrudução
// function soma(a, b) {
//  return a + b
// }

//Matchers para números:

// test(`1 + 4 retorna 5`, ()=>{
//  expect(soma(1,4)).toBe(5)
//  expect(soma(2,8)).toBe(10)
// })

//Função Maior que.
// test('18 é maior que 19', () => {
//  const numero = 18
//  expect(19).toBeGreaterThan(numero)
// });

//Função Maior ou Igual que.
// test('18 é maior que 19', () => {
//  const numero = 18
//  expect(18).toBeGreaterThanOrEqual(numero)
// });

//Matchers para strings:

test("Procura a letra i na palavra",()=>{
 const palavra = "coimbra"
 expect(palavra).toMatch(/i/)
 expect(palavra).not.toMatch(/p/)
})
