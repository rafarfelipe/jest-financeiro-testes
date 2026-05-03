const pedidoService = {
  calcularTotal: (itens) => {
    return itens.reduce((total, item) => total + item.valor, 0);
  },
  aplicarDesconto: (valor, desconto) => {
    return valor * (1 - desconto);
  },
  gerarNota: (valor) => {
    console.log('Gerando nota');
    return valor;
  },
  fecharPedido: (itens, desconto) => {
    const total = pedidoService.calcularTotal(itens);
    const valorFinal = pedidoService.aplicarDesconto(total, desconto);
    pedidoService.gerarNota(valorFinal);
    return valorFinal;
  }
};

module.exports = pedidoService;