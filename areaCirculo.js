// Exercício "Área do Círculo" se encontra no link: 
// https://www.urionlinejudge.com.br/judge/pt/problems/view/1002
// Tests Cases: raio = 2.00; raio = 100.64; raio = 150.00

const n = 3.14159;
function areaCirculo(raio){
    let area = n * (Number(raio) * Number(raio));
    return area.toFixed(4); 
}

testCase = [2.00, 100.64, 150.00];
for (raio of testCase){
    console.log(`A = ${areaCirculo(raio)}`);
}
