// https://www.urionlinejudge.com.br/judge/pt/problems/view/1040


function media(a, b, c, d){
    let soma = Number((a * 2 + b * 3 + c * 4 + d)/10);
    if (soma >= 7.0){
        console.log(`Media: ${soma} \nAluno aprovado.`);
    } else if (soma < 5.0){
        console.log(`Media: ${soma} \nAluno reprovado.`);
    } else {
            function nota (n){
            let mediaFinal = Number((soma + n)/2);
            console.log(`Media: ${soma} \nAluno em exame. \nNota do exame: ${n}`);
            if (soma >= 5.0){
                console.log(`Aluno aprovado. \nMedia Final: ${mediaFinal}`);
            } else if (soma < 5.0){
                console.log(`Aluno reprovado. \nMedia Final: ${mediaFinal}`);
            };
        }
    } 
}; 

media(9.0, 4.0, 8.5, 9.0)
nota(6.4)
