elemOrdenarPreco = document.getElementById('btnOrdenarPorPreco');

elemOrdenarPreco.addEventListener('click', ordenarLivros);

let orderDesc = true;

function ordenarLivros() {
    let livrosOrdenados;
    if (orderDesc)     
        livrosOrdenados = livros.sort((a, b) => b.preco - a.preco);
    else
        livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

    orderDesc = !orderDesc;
}