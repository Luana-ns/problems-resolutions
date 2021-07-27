// Este exercício se encontra no link:
// https://www.urionlinejudge.com.br/judge/pt/problems/view/1036

let A = 10.0;
let B = 20.1;
let C = 5.1;

function raizes(a,b,c){
    let delta = parseFloat(b * b - 4 * a * c);
    if (delta < 0 || a == 0){
        console.log('Impossível calcular');
    } else {
        let r1 = parseFloat((-b + Math.sqrt(delta))/ (a+a));
        let r2 = parseFloat((-b - Math.sqrt(delta))/ (a+a));    
        console.log(`R1 = ${r1.toFixed(5)}`)
        console.log(`R2 = ${r2.toFixed(5)}`)
    }
    return; 
}

raizes(A,B,C);