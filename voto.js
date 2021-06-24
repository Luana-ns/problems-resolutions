// A partir de uma idade = n, com n determinado pelo usuário,
// mostre se o cidadão vota ou não, de acordo com a legislação
// brasileira. 

let idade = 68
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log(`Não vota`)
} else if (idade < 18 || idade > 65){
    console.log(`Voto opcional`)
}else {
    console.log(`Voto obrigatório`)
}
