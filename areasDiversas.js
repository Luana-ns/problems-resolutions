// Exercício se encontra no link: 
// https://www.urionlinejudge.com.br/judge/pt/problems/view/1012
// Testes realizados com os dois exemplos apresentados no site.

let a = 12.7;
let b = 10.4;
let c = 15.2;

function triangulo (a,c) {
    let areatriangulo = parseFloat(a*c)/2;
    return areatriangulo.toFixed(3);
}
function circulo (c) {
    let areaCirculo = parseFloat((c*c)*3.14159);
    return areaCirculo.toFixed(3);
}
function trapezio (a,b,c){
    let areaTrapezio = parseFloat(((a+b)*c)/2);
    return areaTrapezio.toFixed(3);
}
function quadrado (b){
    let areaQuadrado = parseFloat(b*b);
    return areaQuadrado.toFixed(3);
}
function retangulo (a,b){
    let areaRetangulo = parseFloat(a*b);
    return areaRetangulo.toFixed(3);
}

console.log(`TRIANGULO: ${triangulo(a,c)} 
CIRCULO: ${circulo(c)} 
TRAPEZIO: ${trapezio(a,b,c)} 
QUADRADO: ${quadrado(b)} 
RETANGULO: ${retangulo(a,b)}`);
