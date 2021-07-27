// Exercício "Diferença" se encontra no site:
// https://www.urionlinejudge.com.br/judge/pt/problems/view/1007
function difference(a, b, c, d){
    let difference = (a * b - c * d)
    return difference
}
x = difference (5, 6, 7, 8);
y = difference (0, 0, 7, 8);
z = difference (5, 6, -7, 8);
console.log(`DIFERENCA = ${x}
DIFERENCA = ${y}
DIFERENCA = ${z}`);