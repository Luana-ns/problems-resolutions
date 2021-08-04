// https://www.urionlinejudge.com.br/judge/pt/problems/view/1219

function triangulo(a, b, c){
    if (((a + b) <= c) || ((b + c) <= a) || ((a + c) <= b)){
        return 0;
    } 
    return 1;
}

function areasColoridas(){
    if (triangulo(lado1,lado2,lado3) == 1){
        let p = (lado1 + lado2 + lado3) / 2;
        let areaTri = Math.sqrt(p*(p-lado1)*(p-lado2)*(p*lado3));
        const pi = 3.1415926535897;
        let raioCircInscrita = (areaTri / p);
        let areaCircInscrita = pi * raioCircInscrita * raioCircInscrita;
        let raioCircCircunscrita = (lado1 * lado2 * lado3) / (4 * areaTri);
        let areaCircCircunscrita = pi * raioCircCircunscrita * raioCircCircunscrita;
    }
}