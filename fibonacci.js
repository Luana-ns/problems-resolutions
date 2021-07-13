// Neste exercício iremos calcular os valores da sequência de Fibonacci.
// Na matemática, a Sequência de Fibonacci é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual, cada termo subsequente corresponde à soma dos dois anteriores.
// Os números de Fibonacci são, portanto, os números que compõem a seguinte sequência:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, ...
// Calcule o número de fibonacci que está na décima posição. 

function fibonacci(n) {
    if ((n == 1) || (n == 2)){
        return 1; 
    } else { 
        return (fibonacci(n-1) + fibonacci(n-2))
    }
}

let testCase = fibonacci(10)
console.log(testCase)