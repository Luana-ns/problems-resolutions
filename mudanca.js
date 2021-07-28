// Exercício "A Mudança" se encontra no site: 
// https://www.urionlinejudge.com.br/judge/pt/problems/view/2685

let angulo = 360;
if ((angulo === 0) || (angulo === 360) || (angulo > 0) && (angulo < 90)){
    console.log('Bom dia!');
} else if ((angulo === 90) ||(angulo > 90) && (angulo < 180)){
    console.log('Boa tarde!');
} else if ((angulo === 180) ||(angulo > 180) && (angulo < 270)){
    console.log('Boa noite!');
} else {
    console.log('De Madrugada!');
}
