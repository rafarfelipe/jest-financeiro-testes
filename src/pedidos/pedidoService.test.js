const pedidoService = require('./pedidoService')

describe('Pedido Service', () => {
    describe('calcularTotal', () => {
        test('deve somar itens corretamente', () => {
            const itens = [{ valor: 100 }, { valor: 200 }]
            expect(pedidoService.calcularTotal(itens)).toBe(300)
        })
    })

    describe('aplicarDesconto', () => {
        test('deve reduzir valor corretamente', () => {
            expect(pedidoService.aplicarDesconto(100, 0.1)).toBe(90)
        })
    })

    describe('gerarNota', () => {
        test('deve retornar o valor e logar', () => {
            const spy = jest.spyOn(console, 'log').mockImplementation()
            const resultado = pedidoService.gerarNota(100)
            expect(resultado).toBe(100)
            expect(spy).toHaveBeenCalledWith('Gerando nota')
            spy.mockRestore()
        })
    })

    describe('fecharPedido', () => {
        test('deve fechar o pedido corretamente', () => {
            const spyNota = jest.spyOn(pedidoService, 'gerarNota')

            const itens = [{ valor: 100 }]
            const valor = pedidoService.fecharPedido(itens, 0.1)
            expect(valor).toBe(90)
            expect(spyNota).toHaveBeenCalledTimes(1)
            expect(spyNota).toHaveBeenCalledWith(90)
            spyNota.mockRestore()
        })

        test('deve propagar erro quando cupom indisponível', () => {
            const spyDesconto = jest.spyOn(pedidoService, 'aplicarDesconto')
                .mockImplementation(() => {
                    throw new Error('Cupom indisponível')
                })

            const itens = [{ valor: 100 }]
            expect(() => pedidoService.fecharPedido(itens, 0.1)).toThrow('Cupom indisponível')
            spyDesconto.mockRestore()
        })
    })
})