// Dada uma palavra, verificar com o mínimo de interações possíveis, se ela é um palíndromo.
// testCase: [ovo, amor a roma]

function checkPalindromo(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != word[word.length - i - 1]) {
            return false
        } else return true
    }
}


//Teste: 
let testCase = ['ovo', 'rio', 'ana', 'creme', 'amor a roma'];
for (let i = 0; i < testCase.length; i++) {
    console.log(checkPalindromo(testCase[i]))
}

