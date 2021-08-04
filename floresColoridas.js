// Este exercício se encontra no link: 
// https://www.urionlinejudge.com.br/judge/pt/problems/view/1219


let a = 4; 
let b = 30;
let c = 32;
let g = 0;
let v = 0;
let r = 0;

function triangulo(a, b, c){
    if (((a + b) <= c) || ((b + c) <= a) || ((a + c) <= b)){
        return 0;
    } 
    return 1;
}

function areasColoridas(){
    if (triangulo(a,b,c) == 1){
        let p = (a + b + c) / 2;
        let areaTri = Math.sqrt(p* (p - a) * (p - b) * (p - c));
        const pi = 3.1415926535897;
        let raioCircInscrita = Number(areaTri / p);
        let areaCircInscrita = Number(pi * (raioCircInscrita * raioCircInscrita));
        let raioCircCircunscrita = Number((a * b * c) / (4 * areaTri));
        let areaCircCircunscrita = Number(pi * (raioCircCircunscrita * raioCircCircunscrita));
        g = areaCircCircunscrita - areaTri;
        v = areaTri - areaCircInscrita;
        r = areaCircInscrita;
    } else {
        console.log ("Não forma triângulo \n");
    }

    console.log (`Girassóis: ${parseFloat(g).toFixed(4)} \nVioletas: ${parseFloat(v).toFixed(4)} \nRosas: ${parseFloat(r).toFixed(4)} \n`);

    return 0;
}

areasColoridas(triangulo());

// Testes realizados e resultados tiveram êxito a partir dos exemplos do site; 