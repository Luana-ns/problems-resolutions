// Resolução do exercício que se encontra no link: https://br.spoj.com/problems/PAR/

function playWinner (players, play){
    if ((play[0] + play[1]) % 2 === 0){
        return players[0]
    } 
    return players[1]
} 
const testCase = [[['Pedro', 'Paulo'], ['Claudio', 'Carlos'], ['Luana', 'Filipe']], 
                [[[2 , 4] , [ 3 , 5] , [1 , 0]] , [[1 , 5] , [2 , 3]], [[7, 7], [8, 7], [0, 0], [3, 2]]]]
for (let i = 0; i < testCase.length -1; i++){
    for (let j = 0; j < testCase[1].length; j++){   
        console.log(`Teste ${j + 1}`)
        for (let k = 0; k < testCase[1][j].length; k++ ){
            console.log(playWinner(testCase[0][j],testCase[1][j][k]))
        } 
        console.log( )  
    }  
} 
