// Exercício "Volume da Esfera" se encontra no link:
// https://www.urionlinejudge.com.br/judge/pt/problems/view/1011

const pi = 3.14159;
function volumeEsfera(raio){
    volume = (4/3) * pi * Number(raio)**3
    return volume.toFixed(3)
}

testCase = ['3', '15', '1523'];
for (const raio of testCase) {
    console.log(`Volume = ${volumeEsfera(parseFloat(raio))}`)
}
