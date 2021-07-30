// Exercício "A Mudança" se encontra no site: 
// https://www.urionlinejudge.com.br/judge/pt/problems/view/2685


let graus = 260;
if ((graus >= 0) && (graus < 90) || (graus === 360) ){
    console.log('Bom dia!');
} else if ((graus >= 90) && (graus < 180)){
    console.log('Boa tarde!');
} else if ((graus >= 180) && (graus < 270)){
    console.log('Boa noite!');
} else {
    console.log('De Madrugada!');
}
