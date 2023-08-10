const desconto = 0;

function aplicarDesconto(livros) {
    let livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco * (1 - desconto)}
    });
    return livrosComDesconto;
}