//Dados os números 5! e 3!, calcule o valor da soma entre eles:
var primeirofatorial = (5)
var resultado1 = 1
for (var i = primeirofatorial; i>1; i--){
    resultado1 *= i
}
var segundofatorial = (3)
var resultado2 = 1
for (var i = segundofatorial; i>1; i--){
    resultado2 *= i
}
var soma = Number(resultado1 + resultado2)
console.log(`A soma dos fatoriais dos números ${primeirofatorial} e ${segundofatorial} é: ${soma}`)