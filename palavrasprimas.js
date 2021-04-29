//Escrever um programa para determinar se uma palavra é uma palavra prima ou não. Uma palavra é uma palavra prima se a soma de suas letras é um número primo. Cada letra possui um valor específico, de modo que a = 1, z = 26, A = 27 e Z = 52.

let getNumeros = function (palavra){
    let numeros = []
    for (let z = 0; z < palavra.length; z++){
        let numero = palavra.charCodeAt(z)
        if (numero >= 65 && numero <= 90)
        numero -= 38
        if (numero >= 97 && numero <= 122)
        numero -= 96
        numeros.push(numero)
    }
    return numeros;
}
let x = getNumeros('UFMG');
console.log(x);
const soma = x.reduce((soma, elementosLista) => soma + elementosLista);
console.log(`A soma das letras da palavra é igual a ${soma}.`)

//Verificar se a soma dos elementos é um número primo: 
let count = 0;
let i = 0;
for (i = 1; i <= soma ; i++){
  if (soma % i == 0){
    count++
  }
}
if (count == 2) {
  console.log(`É uma palavra prima.`)
} else 
  {console.log(`Não é uma palavra prima.`)
}