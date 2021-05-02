//Escrever um programa para determinar se uma palavra é uma palavra prima ou não. 
//Uma palavra é uma palavra prima se a soma de suas letras é um número primo. 
//Cada letra possui um valor específico, de modo que a = 1, z = 26, A = 27 e Z = 52.

function valor(palavra){
    soma = 0
    for (let z = 0; z < palavra.length; z++){
        let numero = palavra.charCodeAt(z)
        if (numero >= 65 && numero <= 90)
        numero -= 38
        if (numero >= 97 && numero <= 122)
        numero -= 96
        soma += numero
    }
    return soma;
}

//Verificar se a soma dos elementos é um número primo: 
function isPrime(soma){
  if (soma < 2) {
    return 'Não é uma palavra prima.'
  } 
  for (i = 2; i < soma; i++){
    if (soma % i == 0){
      return 'Não é uma palavra prima.'
    } 
  }
  return 'É uma palavra prima.'
}

//Teste: 
let exemplos = [ 'UFRN', 'contest', 'AcM']; 
let resultado = exemplos.map(palavra => console.log(palavra, ': ', isPrime(valor(palavra))))
