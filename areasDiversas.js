// Exercício se encontra no link: 
// https://www.urionlinejudge.com.br/judge/pt/problems/view/1012

let a = 0;
let b = 0; 
let c = 0;
function triangulo (a, b, c) {
    areatriangulo = Number(a * c)
    return areatriangulo.toFixed(3)
}
function circulo (a, b, c) {
    areaCirculo = Number(c**2 * 3.14159)
    return areaCirculo.toFixed(3)
}
function trapezio (a, b, c){
    areaTrapezio = Number(((a + b)*c)/2)
    return areaTrapezio.toFixed(3)
}
function quadrado (a, b, c){
    areaQuadrado = Number(b**2)
    return areaQuadrado.toFixed(3)
}
function retangulo (a, b, c){
    areaRetangulo = Number(a * b)
    return areaRetangulo.toFixed(3)
}

testCase = ('3.0', '4.0', '5.2');
console.log(triangulo(a,b,c))
