//Escrever um programa para determinar se uma palavra é uma palavra prima ou não. 
//Uma palavra é uma palavra prima se a soma de suas letras é um número primo. 
//Cada letra possui um valor específico, de modo que a = 1, z = 26, A = 27 e Z = 52.

function convertePalavraEmValor(palavra){
    let soma = 0
    for (let i = 0; i < palavra.length; i++){
        soma += palavra.charCodeAt(i)
        if (soma >= 65 && soma <= 90)
        soma -= 38
        if (soma >= 97 && soma <= 122)
        soma -= 96        
    }
    return isPrime(soma);
}

//Verificar se a soma dos elementos é um número primo: 
function isPrime(soma){
  if (soma < 2 && soma % 2 == 0) {
    return 'Não é uma palavra prima.'
  } 
  for (i = 2; i < soma/2; i++){
    if (soma % i == 0){
      return 'Não é uma palavra prima.'
    } 
  }
  return 'É uma palavra prima.'
}

//Teste: 
let exemplos = [ 'UFRN', 'contest', 'AcM'];
for (let i = 0; i < exemplos.length; i++){
  console.log(convertePalavraEmValor(exemplos[i]))
} 
