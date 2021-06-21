// Exercício para aprender a obter o horário real
// (que está configurado no computador) e a partir
// dessa informação usar a saudação coerente com 
// o período do dia.

let agora = new Date()
let hora = agora.getHours()
let minutos = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos.`)
if (hora < 12){
    console.log('Bom dia!')
} else if (hora < 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
} 
