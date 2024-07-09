function calcular() {
    const valorTotal = parseFloat(document.getElementById('valorTotal').value);
    const valorParcial = parseFloat(document.getElementById('valorParcial').value);
    const porcentagemTotal = parseFloat(document.getElementById('porcentagemTotal').value);
    const porcentagemParcial = parseFloat(document.getElementById('porcentagemParcial').value);

    let resultado = '';

    if (!isNaN(valorTotal) && !isNaN(valorParcial) && !isNaN(porcentagemTotal)) {
        resultado = `Porcentagem Parcial: ${(valorParcial / valorTotal * porcentagemTotal).toFixed(2)}%`;
    } else if (!isNaN(valorTotal) && !isNaN(valorParcial) && !isNaN(porcentagemParcial)) {
        resultado = `Porcentagem Total: ${((valorTotal * porcentagemParcial) / valorParcial).toFixed(2)}%`;
    } else if (!isNaN(valorTotal) && !isNaN(porcentagemTotal) && !isNaN(porcentagemParcial)) {
        resultado = `Valor Parcial: ${(valorTotal * porcentagemParcial / porcentagemTotal).toFixed(2)}`;
    } else if (!isNaN(valorParcial) && !isNaN(porcentagemTotal) && !isNaN(porcentagemParcial)) {
        resultado = `Valor Total: ${(valorParcial * porcentagemTotal / porcentagemParcial).toFixed(2)}`;
    } else {
        resultado = 'Por favor, preencha três dos campos.';
    }

    document.getElementById('resultado').innerText = resultado;
}