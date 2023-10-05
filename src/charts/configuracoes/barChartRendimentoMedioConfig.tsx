import { FIIType } from "../../interfaces/FIIType"
import FuncoesDeComparacao from "../../utils/funcoesDeComparacao"
import BarChart from "../models/barChart"

const util_FuncoesComparacao = new FuncoesDeComparacao()

export default function BarChartRendimentoMedioConfig(lista : FIIType[]) {        
    return {
        cssProps : {
            width: '1000px', height: '300px'
        },
        option : {
            xAxis: {
                type: 'category',
                data: lista?.sort(util_FuncoesComparacao.funcaoComparacaoRendimentoMedioAnual)
                .map(fii => {return fii.nome}).slice(0,30)
            },
            yAxis: {   
                type: 'value',
                data: lista?.sort(util_FuncoesComparacao.funcaoComparacaoRendimentoMedioAnual)
                .map(fii => {return Number.parseFloat(fii.rendimentoMedioAnual.replace(',', '.'))}).slice(0,10)
            },
            series: [
                {
                    type: 'bar',
                    data: lista?.sort(util_FuncoesComparacao.funcaoComparacaoRendimentoMedioAnual)
                    .map(fii => {
                        return {
                            value: fii.rendimentoMedioAnual === 'N/A' ? 
                            Number.parseFloat('0,00') : Number.parseFloat(fii.rendimentoMedioAnual.replace(',', '.')),

                            itemStyle: {
                                color: '#8E44AD',
                                shadowColor: '#8E44AD',     
                                opacity: 0.5                                                           
                            },
                        }
                    })
                    .slice(0,30),
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(220, 220, 220, 0.8)'
                    },
                    barWidth: '50%',                                
                }
            ]
        }
    } 
}