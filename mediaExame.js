// Este exercício se encontra no link:
// https://www.urionlinejudge.com.br/judge/pt/problems/view/1040

function media(a, b, c, d) {
    let soma = Number((a * 2 + b * 3 + c * 4 + d) / 10);
    if (soma >= 7.0) {
        console.log(`Media: ${soma} \nAluno aprovado.`);
    } else if (soma < 5.0) {
        console.log(`Media: ${soma} \nAluno reprovado.`);
    } else {
        console.log(`Media: ${soma} \nAluno em exame. `);
        let notaExame = Number("6.4");
        const mediaFinal = Number((soma + notaExame) / 2);
        console.log(`Nota do exame: ${notaExame}`);
        if (soma >= 5.0) {
            console.log(`Aluno aprovado. \nMedia Final: ${mediaFinal}`);
        } else if (soma < 5.0) {
            console.log(`Aluno reprovado. \nMedia Final: ${mediaFinal}`);
        }
    }
};

media(2.0, 4.0, 7.5, 8.0);
