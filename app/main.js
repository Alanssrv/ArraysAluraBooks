let livros = [];
const endpointApiLivros = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getLivros();

async function getLivros() {
    const response = await fetch(endpointApiLivros);
    livros = await response.json();

    livros = aplicarDesconto(livros);
    exibirLivros(livros);
}
