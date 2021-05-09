// Resolução do exercício que se encontra no site: https://www.urionlinejudge.com.br/judge/pt/problems/view/1542

function lendoLivros( quantidadeDePaginasLidas, diasAdiantadosSeFossemLidasMaisPaginas, paginasQuePoderiamSerLidas) {
    totalDePaginasDoLivro = (quantidadeDePaginasLidas * diasAdiantadosSeFossemLidasMaisPaginas * paginasQuePoderiamSerLidas)/(paginasQuePoderiamSerLidas - quantidadeDePaginasLidas)

    if (totalDePaginasDoLivro == 1){
        console.log(`${totalDePaginasDoLivro} pagina`)
    } else console.log(`${totalDePaginasDoLivro} paginas`)
}
// Teste: 
lendoLivros(3, 16, 5)