//Dado um número n, verificar se é um número primo. 
let n = 23;
let count = 0;
let i = 0;
for (i = 1; i <= n ; i++){
  if (n % i == 0){
    count++
  }
}
if (count == 2) {
  console.log(`O número ${n} é primo.`)
} else 
  {console.log(`O número ${n} não é primo.`)
}