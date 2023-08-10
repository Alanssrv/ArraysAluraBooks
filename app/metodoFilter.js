const navBotoes = document.querySelectorAll('.btn');
navBotoes.forEach(botao => botao.addEventListener('click', filtrarLivros));

let categoriaAnterior = '';

function filtrarLivros() {
    const elemBtnCategoria = document.getElementById(this.id);
    const categoria = elemBtnCategoria.value;
    if (categoriaAnterior == categoria || categoria == '') {
        categoriaAnterior = '';
        exibirLivros(livros);
    } else {
        categoriaAnterior = categoria;
        const livrosFiltrados = categoria == 'disponivel'
            ? filtrarLivrosDisponiveis()
            : filtrarLivrosPorCategoria(categoria);
        exibirLivros(livrosFiltrados);

        if (categoria == 'disponivel') {
            const valorTotal = valorTotalLivros(livrosFiltrados);
            exibirTotalLivrosDisponiveis(valorTotal);
        }
    }
}

function exibirTotalLivrosDisponiveis(valorTotal) {
    elemTotalLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `;
}

function filtrarLivrosPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarLivrosDisponiveis() {
    return livros.filter(livro => livro.quantidade > 0);
}
