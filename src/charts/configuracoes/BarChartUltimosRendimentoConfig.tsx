import { FIIType } from "../../types/FIIType"
import FuncoesDeComparacao from "../../utils/funcoesDeComparacao"
const util_FuncoesComparacao = new FuncoesDeComparacao()

export default function BarChartUltimosRendimentoConfig(lista : FIIType[]) {        
    const listaProps = lista?.sort(util_FuncoesComparacao.funcaoComparacaoRendimentoValor)
    const listaNomeOrdenada = listaProps.map(fii => {return fii.nome}).slice(0,15)
    const listaUltimosRendimentosOrdenada = listaProps.map(fii => {return Number.parseFloat(fii.ultimosRedimento.replace(',', '.'))}).slice(0,15)
    
    const barraUltimosRendimentosRs = listaProps                    
    .map(fii => {
        return {
            value: fii.ultimoRedimentoRS === 'N/A' ? 
            Number.parseFloat('0,00') : Number.parseFloat(fii.ultimoRedimentoRS.replace(',', '.')),

            itemStyle: {
                color: '#3498DB',
                shadowColor: '#3498DB',     
                opacity: 0.5                                                           
            },
        }
    })
    .slice(0, 15)   

    const barraUltimosRendimentos = listaProps                    
    .map(fii => {
        return {
            value: fii.ultimosRedimento === 'N/A' ? 
            0 : Number.parseFloat(fii.ultimosRedimento.replace(',', '.')),

            itemStyle: {
                color: '#1B4F72',
                shadowColor: '#1B4F72',                                
                opacity: 0.5
            },
        }
    })
    .slice(0, 15)

    // Chart --------------------------->
    return {
        cssProps : {
            width: '1000px', height: '300px'
        },
        option : {
            xAxis: {
                type: 'category',
                data: listaNomeOrdenada
            },
            yAxis: {   
                type: 'value',
                data: listaUltimosRendimentosOrdenada
            },
            series: [
                {
                    type: 'bar',
                    data: barraUltimosRendimentosRs,
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(220, 220, 220, 0.8)'
                    },
                    barWidth: '30%',                                                                        
                },
                {
                    type: 'bar',
                    data: barraUltimosRendimentos,
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(220, 220, 220, 0.8)'
                    },
                    barWidth: '30%',                    
                },                
            ]
        }
    } 
}