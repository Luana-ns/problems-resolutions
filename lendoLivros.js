// Resolução do exercício que se encontra no site: https://www.urionlinejudge.com.br/judge/pt/problems/view/1542
// q = quantidade de páginas lidas por dia
// d = dias adiantados se forem lidas p páginas por dia
// p = número maior de páginas que poderiam ser lidas por dia


function calculatePages(pagesRead, days, pagesThatCouldBeRead) {
    const q = pagesRead
    const d = days
    const p = pagesThatCouldBeRead
    totalPages = (q * d * p)/(p - q)
    return totalPages
}
console.log(`${calculatePages(3, 16, 5)} página(s)`)