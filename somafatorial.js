//Dados os números 3 e 5, então 3! + 5! é igual a: 
let fatorial = function fat(n){
    return n<2 ? 1 : n*fat(n-1) 
    }
let x = fatorial(3)
let y = fatorial(5)
let soma = console.log(Number(x + y))