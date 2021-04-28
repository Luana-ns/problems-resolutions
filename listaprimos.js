//Dado um array, verificar quais números são primos. 
const list = [2, 5, 6, 7, 8, 9, 13, 14, 17, 57, 73];
for (let z = 0; z < list.length; z++){
    let count = 0;
    n = list[z];
    for (let i = 1; i <= n ; i++){
        if (n % i == 0){
        count++;
        } 
    }
    if (count == 2){
        console.log(`O número ${n} é primo.`)
    } else {
        console.log(`O número ${n} não é primo.`)
    }  
} 
