// Resolução do problema que se encontra no link: https://br.spoj.com/problems/COFRE/
const testCase = [
    [[20 , 25] , [10 , 5] , [10 , 10]] , 
    [[0 , 5] , [12 , 0] , [0 , 20], [17, 1]]
]

function safeBox (testCase){
    let indexTest = 1
    for (const deposits of testCase){
        let joaozinho = 0
        let zezinho = 0
        console.log(`Teste ${indexTest++}`)
        for (const deposit of deposits){
            joaozinho += deposit[0]
            zezinho += deposit[1]
            console.log(joaozinho - zezinho)
        } console.log(" ")
    } 
} 
safeBox(testCase)
