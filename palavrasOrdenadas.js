//https://br.spoj.com/problems/PALAVRMG/

function orderWord(word) {
    for (let i = 0; i < word.length; i++) {
        for (let j =1; j < word.length +1; j++){
            if (word.charCodeAt(i) > word.charCodeAt(j)) {
                return false
            } 
        }
    } 
    return true
}

// Test: 
let testCase = ['a', 'belo', 'fiNo', 'batata', 'abracadabra'];
for (const word of testCase) {
    console.log(orderWord(word))
}