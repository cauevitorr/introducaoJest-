/** Área do Quadrado */
// function retornaAreaDoQuadrado(altura, comprimentoBase) {
//  return altura * comprimentoBase
// }

// test("Área do quadrado", () => {
//  expect(retornaAreaDoQuadrado(2,2)).toBe(4)
//  expect(retornaAreaDoQuadrado(2,2)).toBeGreaterThan(3)
//  expect(retornaAreaDoQuadrado(2,2)).toBeLessThan(5)
// })


/** Média */
// function media(nota1, nota2, nota3, divisor) {
//  return (nota1 + nota2 + nota3) / divisor
// }

// test("Média", () => {
//  expect(media(5,5,5,3)).toBeCloseTo(5.005)
//  expect(media(5,5,5,3)).toBeCloseTo(4.995)
// })


/** Saudação */
// function saudacao(nome){
//  return `Olá, ${nome}`
// }

// test("Saudação",()=>{
//  expect(saudacao("Cauê")).toMatch(/Olá, Cauê/)
//  expect(saudacao("Cauê")).toHaveLength(9)
// })

/** Valida email */
// function validaEmail(email){
//  const regexEmail = /^[\w-/.]+@([\w-]+\.)+[\w-]{2,4}$/
//  return regexEmail.test(email)
// }

// test("Valida Email",()=>{
//  expect(validaEmail("caue@aluno.com")).toEqual(true)
// })

/** Contem valor */
// function contemValor(array, valor){
//  return array.includes(valor)
// }
//  test("Contem valor",()=>{

//   const numeros = [1,2,3,4,5]
//   expect(contemValor(numeros,2)).toEqual(true)
//   expect(numeros).toHaveLength(5)

//  })


/** Pares */
function filtraPares(array){
 return array.filter((element) => element % 2 === 0 )
}

test("Números Pares",()=>{
 const numeros = [1,2,3,4,5,6]
  expect(filtraPares(numeros)).toEqual([2,4,6])
 expect(filtraPares(numeros)).toContainEqual(2,4,6)
})
