// Este exercício se encontra no link:
// https://www.urionlinejudge.com.br/judge/pt/problems/view/1045
let A = 0;
let B = 0;
let C = 0;

function triangulos (A, B, C){
    let aux = A;

    if(B > A){
     aux = B;
     B = A;
     A = aux;
    }

    if(C > A){
     aux = C;
     C = A;
     A = aux;
    }

    if(C > B){
     aux = C;
     C = B;
     B = aux;
    }
    
        if (A >= (B + C)){
            console.log('NÃO FORMA TRIANGULO');
        } else{ 
            if ((A**2) == ((B**2) + (C**2))){
                console.log('TRIANGULO RETANGULO');
            } if ((A**2) > (B**2 + C**2)){
                console.log('TRIANGULO OBTUSANGULO');
            } if ((A**2) < ((B**2) + (C**2))){
                console.log('TRIANGULO ACUTANGULO');
            } if ((A == B && B == C)){
                console.log('TRIANGULO EQUILATERO');
            } else if(A === B || A === C || B === C){
                console.log('TRIANGULO ISOSCELES');
            }
        }
        return;
}

triangulos(6.0, 6.0, 10.0);