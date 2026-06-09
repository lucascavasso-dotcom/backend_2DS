// usa padrao moderno import-export - ESM
// aqui criaremos nossos modulos

export function alugarFilmes(nomeFilme, dataAluguel, preco)
{
    return `O filme ${nomeFilme} foi alugado em ${dataAluguel} por R$ ${preco}`
}

export function devolverFilme(nomeFilme, dataDevolucao)
{
    return `O filme ${nomeFilme} foi devolvido em ${dataDevolucao}`
}
