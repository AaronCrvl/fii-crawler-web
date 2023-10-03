import { FIIType } from "../../interfaces/FIIType"
import FuncoesDeComparacao from "../../utils/funcoesDeComparacao"
import BarChart from "../models/barChart"

const util_FuncoesComparacao = new FuncoesDeComparacao()

export default function BarChartUltimosRendimentoConfig(lista : FIIType[]) {        
    return {
        cssProps : {
            width: '1000px', height: '300px'
        },
        option : {
            xAxis: {
                type: 'category',
                data: lista?.sort(util_FuncoesComparacao.funcaoComparacaoRendimentoValor)
                .map(fii => {return fii.nome}).slice(0,15)
            },
            yAxis: {   
                type: 'value',
                data: lista?.sort(util_FuncoesComparacao.funcaoComparacaoRendimentoValor)
                .map(fii => {return fii.ultimosRedimento}).slice(0,15)
            },
            series: [
                {
                    type: 'bar',
                    data: lista?.sort(util_FuncoesComparacao.funcaoComparacaoRendimentoValor)                    
                    .map(fii => {
                        return {
                            value: fii.ultimoRedimentoRS === 'N/A' ? 
                            Number.parseFloat('0,00') : Number.parseFloat(fii.ultimoRedimentoRS),

                            itemStyle: {
                                color: '#3498DB',
                                shadowColor: '#3498DB',     
                                opacity: 0.5                                                           
                            },
                        }
                    })
                    .slice(0, 15),
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(220, 220, 220, 0.8)'
                    },
                    barWidth: '30%',                                                                        
                },
                {
                    type: 'bar',
                    data: lista?.sort(util_FuncoesComparacao.funcaoComparacaoRendimentoValor)                    
                    .map(fii => {
                        return {
                            value: fii.ultimosRedimento === 'N/A' ? 
                            0 : Number.parseFloat(fii.ultimosRedimento),

                            itemStyle: {
                                color: '#1B4F72',
                                shadowColor: '#1B4F72',                                
                                opacity: 0.5
                            },
                        }
                    })
                    .slice(0, 15),
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