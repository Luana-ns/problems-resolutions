let n = 1;
function parOuImpar(jogadores, numbers){
    console.log(`Teste ${n}`)
    n++
    for ( let i = 0; i < numbers.length; i++){
        let soma = 0
        for (let j = 0; j < numbers[i].length; j++){
        soma += numbers[i][j]}
            
        if (soma % 2 === 0)
            console.log(jogadores[0]);
        else 
            console.log(jogadores[1]);   
    }  
    //console.log(" ")
    return '  '
} 

//Testes:
const players = ['Pedro', 'Paulo']
const numbers = [[2 , 4] , [ 3 , 5] , [1 , 0]]
const players2 = ['Claudio', 'Carlos']
const numbers2 = [[1 , 5] , [2 , 3]]

console.log(parOuImpar(players, numbers))
console.log(parOuImpar(players2, numbers2))
    

