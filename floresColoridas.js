// https://www.urionlinejudge.com.br/judge/pt/problems/view/1219

function triangulo(a, b, c){
    if (((a + b) <= c) || ((b + c) <= a) || ((a + c) <= b)){
        return 0;
    } 
    return 1;
}

