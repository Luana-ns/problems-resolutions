// Dada uma palavra, verificar com o mínimo de interações possíveis, se ela é um palíndromo.
// testCase: [ovo, amor a roma]

function checkPalindromo(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != word[word.length - i - 1]) {
            return false
        } 
    } 
    return true
}


//Teste: 
let testCase = ['ovo', 'rio', 'ana', 'creme', 'amor a roma', 'ole maracuja caju caramelo'];
for (const word of testCase) {
    console.log(checkPalindromo(word))
}


// Ignorar o case sensitive; 
// Ignorar os espaços;