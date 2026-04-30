import { gerarResumoFinanceiro } from './relatorioService'

describe('Consulta de saldo geral', () => {
    test('Deve coletar o saldo de todas as contas e calcular o total', async () => {
        const resultado = await gerarResumoFinanceiro('felipeqa@gmail.com', 'pwdteste')
        expect (resultado).toBe(-2686)
    })
})