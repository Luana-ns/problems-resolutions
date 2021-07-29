// Exercício "A Mudança Continua" se encontra no site: 
// https://www.urionlinejudge.com.br/judge/pt/problems/view/2686

let graus = 1.50;
if (graus <= 360){
    if ((graus === 0) || (graus === 360) || (graus > 0) && (graus < 90)){
        console.log('Bom dia!');
    } else if ((graus === 90) ||(graus > 90) && (graus < 180)){
        console.log('Boa tarde!');
    } else if ((graus === 180) ||(graus > 180) && (graus < 270)){
        console.log('Boa noite!');
    } else {
        console.log('De Madrugada!');
    }
    let horas;
    if (graus >= 270) {
            horas = ((graus - 270.0) * 4.0) / 60.0;
    } else {
            horas = ((graus * 4.0) / 60.0) + 6.0;
    }
                    
    let minutos = (horas * 60.0) % 60.0;
    let segundos = (minutos * 60.0) % 60.0;
                    
    if (segundos > 59) {
            segundos = 0.0;
            minutos += 1.0;
    }
    console.log(`${("0" + horas).slice(-2)}:${("0" + minutos).slice(-2)}:${("0" + segundos).slice(-2)}`)
} else { 
    console.log('Valor inválido!');
}