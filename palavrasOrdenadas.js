//https://br.spoj.com/problems/PALAVRMG/

function orderWord(word) {
    let countOrder = 0;
    for (let i = 0; i < word.length - 1; i++) {
        if (word[i + 1] > word[i]) {
        countOrder += 1;
        }
    }
    let isOrdered = ""
    if (countOrder == (word.length - 1)){
        isOrdered = "O";
    } else {
        isOrdered = "N";
    }
    return isOrdered;
};

// Test: 
let testCase = ['a', 'belo', 'fino', 'Cruz', 'flor', 'batata', 'abracadabra','aaaabc'];
for (const word of testCase) {
    console.log(`${word}: ${orderWord(word)}`)
};