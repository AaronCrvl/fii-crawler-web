import { DividendoType } from "../types/generic/DividendoType";
import FuncoesDeComparacao from "./funcoesDeComparacao";
import { FIIDetalhadoType } from "../types/generic/FIIDetalhadoType";

export default class FuncoesDeCalculo {
    funcoesDeComparacao = new FuncoesDeComparacao()
    
    // Funções Privadas    
    private cotaRecalculada(valorCota: number, rendimentoAnalisado : number) : number {
        console.log(`cota = ${valorCota}`)
        console.log(`rendimentoAnalisado = ${rendimentoAnalisado}`)
        console.log(`Valor cota * rendimento = ${valorCota*rendimentoAnalisado}`)
        return valorCota*rendimentoAnalisado
    }       
    
    // Funções Públicas
    public analisaHistoricoDividendos(dividendos :  DividendoType[]) : number {
        let valorCalculado = 0.00        
        dividendos.forEach((dividendo : DividendoType) => {
            let cotacaoBase = Number.parseFloat(dividendo.cotacaoBase)
            let rendimento = Number.parseFloat(dividendo.rendimento)
            let dividendoYeild = Number.parseFloat(dividendo.dividendoYeild)
            
            valorCalculado += (cotacaoBase * rendimento)
        })
        return valorCalculado
    }

    public calcularSaldoCarteira (fundos : FIIDetalhadoType[]) : string {                
        let valorCalculado : number = 0.00
        fundos.forEach((fii : FIIDetalhadoType) => {
            let valorCota = Number.parseFloat(fii.cota.replace('R$', ''))
            let valorizacao = Number.parseFloat(fii.valorizacao)            
            let qtdCotas = Number.parseInt(fii.qtdCotas)
            
                                                                        // a definir estrutura do qtd cotas
                                                                        // no backend da aplicação
            valorCalculado += (this.cotaRecalculada(valorCota, valorizacao) * 5)
        })

        return valorCalculado.toLocaleString('pt-BR')
    } 

    public calcularVaricaoAtual (fundos : FIIDetalhadoType[]) : number {                
        let valorCalculado = 0.00
        fundos.forEach((fii : FIIDetalhadoType) => {
            let valorCota = Number.parseFloat(fii.cota)
            let valorizacao = Number.parseFloat(fii.valorizacao)            
            let qtdCotas = Number.parseInt(fii.qtdCotas)
            
            valorCalculado += (this.cotaRecalculada(valorCota, valorizacao) * qtdCotas)
        })

        return valorCalculado
    } 
}