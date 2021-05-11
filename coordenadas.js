//Resolução do problema que se encontra no link: https://www.urionlinejudge.com.br/judge/pt/problems/view/1041

function coordinates(x,y){
    if (x == 0 && y == 0){
        return 'Origem'
    } else if (x == 0){
        return'Eixo Y'
    } else if (y == 0){
        return 'Eixo X'
    } else if (x > 0 && y > 0){
        return 'Q1'
    } else if (x < 0 && y > 0){
        return  'Q2'
    } else if (x < 0 && y < 0){
        return 'Q3'
    } else return 'Q4'
}
//Tests:
console.log(coordinates(4.5, -2.2))
console.log(coordinates(0.1, 0.1))
console.log(coordinates(0, 0))
