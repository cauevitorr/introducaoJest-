/** Procura itens em um array */

 const frutas = [ "banana", "maçã", "abacaxi", "melancia", "goiba"]

 test("Ver itens dentro de um array", ()=>{
  expect(frutas).toContain("maçã")
  expect(frutas).not.toContain("uva")
  expect(frutas).toHaveLength(5)
 })

 function retornaErro (){
  throw new Error("Isso é um erro!")
 }
 test("Retorna um erro",()=>{
 expect(()=> retornaErro()).toThrow()
 })

/** testando funções assíncronas */

const fetchData = async () => "Ford Ka"
test("espera que o dado de  seja 'Ford Ka'", async ()=>{
 const carro = await fetchData()
 expect(carro).toBe('Ford Ka')
})
