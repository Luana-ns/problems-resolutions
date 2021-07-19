// Dada uma string, verificar com o mínimo de interações possíveis, se ela é um palíndromo.


function checkPalindromo(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != word[word.length - i - 1]) {
            return false
        } 
    } 
    return true
}


//Teste: 
let testCase = ['ovo', 'rio', 'Ana', 'creme', 'Amor a Roma', 'manga', 'Ole! maRacuja, caJu, Caramelo!'];
for (const word of testCase) {
    console.log(checkPalindromo(word.replace(/[^-a-z0-9]/ig,'').toLowerCase()))
}
 
// Ignorar o case sensitive; 
// Ignorar os espaços;