//Dado n = 5, 5! é igual a: 
let fatorial = function fat(n){
    return n<2 ? 1 : n*fat(n-1) 
    }
    console.log(fatorial(5))
