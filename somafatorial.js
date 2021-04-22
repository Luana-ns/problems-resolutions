//Dados os números 3 e 5, então 3! + 5! é igual a: 
function fatorial(n){
    if ((n == 0) || (n == 1))
        return 1;
    else 
        return (n * fatorial(n - 1));
}
let x = fatorial(3)
let y = fatorial(5)
let soma = console.log(Number(x + y))