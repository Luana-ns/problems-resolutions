// q = quantidade de páginas lidas por dia
// d = dias que adiantaria a leitura se estivesse lendo p páginas por dia
// p = páginas
// total = (q * d * p) /(p - q)

function lerLivros( q, d, p) {
    total = (q * d * p)/(p - q)
    if (total == 1){
        console.log(`${total} pagina`)
    } else console.log(`${total} paginas`)
}
lerLivros(3, 16, 5)