function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
    if (qtd <= 0) {
        alert('Insira um valor válido!');
    } else {
        comprarTipoSelecionado(tipo, qtd);
    }
}

function comprarTipoSelecionado(tipo, qtd) {
    let qtdTipoSelecionado = parseInt(document.getElementById(`qtd-${tipo}`).textContent);
    if (qtd > qtdTipoSelecionado) {
        alert(`Quantidade indisponível para tipo ${tipo}`);
    } else {
        qtdTipoSelecionado = qtdTipoSelecionado - qtd;
        document.getElementById(`qtd-${tipo}`).textContent = qtdTipoSelecionado;
        alert('Compra realizada com sucesso!');
    }
}