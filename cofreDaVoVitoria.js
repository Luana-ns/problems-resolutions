//Rascunho inicial
function safeBox (valorJoao, valorZe){
    let result = 0
    result = (valorJoao + valorZe) 
    return result
}
const testCase = [[[20 , 25] , [10 , 5] , [10 , 10]] , [[0 , 5] , [12 , 0] , [0 , 20], [17, 1]]]


for (let i = 0; i < testCase.length -1; i++){
    for (let j = 0; j < testCase[i].length -1; j++){   
        console.log(`Teste ${j + 1}`)
        for (let k = 0; k < testCase[i][j].length; k++ ){
            let saldo = testCase[i][j][k]+testCase[i][(j+1)][k]
            console.log(safeBox(saldo))
            }
        
        console.log(safeBox(testCase))
    }
}
