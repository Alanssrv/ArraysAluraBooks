let livros = [];
const endpointApiLivros = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const elemSecaoLivros = document.getElementById('livros');

getLivros();

async function getLivros() {
    const response = await fetch(endpointApiLivros);
    livros = await response.json();
    console.table(livros);
    exibirLivros(livros);
}

function exibirLivros(livros) {
    livros.forEach(livro => {
        elemSecaoLivros.innerHTML += `
            <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$ ${livro.preco}</p>
            <div class="tags">
                <span class="tag">Front-end</span>
                <span class="tag">Back-end</span>
            </div>
        </div>
        `;
    });
}