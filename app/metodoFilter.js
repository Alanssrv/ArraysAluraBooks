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
        const livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
        exibirLivros(livrosFiltrados);
    }
}