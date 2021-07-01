// Dada uma palavra, verificar com o mínimo de interações possíveis, se ela é um palíndromo.
// testCase: [ovo, amor a roma]

//const testCase = 'ovo'

function checkPalindromo (word) {
    for (let i = 0; i < word.length / 2; i++){
        for (let z = 0; z < word.length /2; z--){
            if (word[i] == word[z]){
                return true
            } console.log('É um palíndromo')
        }
         
    }
    
}

checkPalindromo('rua')