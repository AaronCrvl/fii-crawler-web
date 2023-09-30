import React, { CSSProperties } from "react";
import BarChart from "../charts/models/barChart";
import FIIApi from "../api/fiiApi";
import { FIIType } from "../interfaces/FIIType";
import PieChart from "../charts/models/pieChart";
import { FIIGrid } from "../components/fiiGrid";
import FuncoesDeComparacao from "../utils/funcoesDeComparacao";
import Carregando from "../components/carregando";
import FuncoesDeElementosDOM from "../utils/funcoesDeElementosDOM";

function Dashboard() {           
    const util_FuncoesComparacao = new FuncoesDeComparacao()
    const util_FuncoesDOM = new FuncoesDeElementosDOM()

    // Hooks --------------------------->
    const [dadosFII, setDadosFII] = React.useState<FIIType[]>()

    React.useEffect(()=> {        
        if(dadosFII === undefined) {
            new FIIApi().getFIIList()
            .then((respostaApi) => {
                if(respostaApi.status === 200) {
                    respostaApi.json()
                    .then( jsonData => {                    
                        let listaFII = jsonData as FIIType[]
                        listaFII = listaFII.filter(fii => fii.ultimosRedimento !== 'N/A').sort(util_FuncoesComparacao.funcaoComparacaoRendimentoValor)           
                        setDadosFII(listaFII)                    
                    })  
                }
                else {

                }              
            })
        }        
    }, dadosFII)

    // Chart Config --------------------------->
    const BarChartUltimosRendimento : typeof BarChart.prototype = {
        cssProps : {
            width: '1000px', height: '300px'
        },
        option : {
            xAxis: {
                type: 'category',
                data: dadosFII?.sort(util_FuncoesComparacao.funcaoComparacaoRendimentoValor)
                .map(fii => {return fii.nome}).slice(0,15)
            },
            yAxis: {   
                type: 'value',
                data: dadosFII?.sort(util_FuncoesComparacao.funcaoComparacaoRendimentoValor)
                .map(fii => {return fii.ultimosRedimento}).slice(0,15)
            },
            series: [
                {
                    type: 'bar',
                    data: dadosFII?.sort(util_FuncoesComparacao.funcaoComparacaoRendimentoValor)                    
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
                    data: dadosFII?.sort(util_FuncoesComparacao.funcaoComparacaoRendimentoValor)                    
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

    const BarChartRendimentoMedioAnual : typeof BarChart.prototype = {
        cssProps : {
            width: '1000px', height: '300px'
        },
        option : {
            xAxis: {
                type: 'category',
                data: dadosFII?.sort(util_FuncoesComparacao.funcaoComparacaoRendimentoMedioAnual)
                .map(fii => {return fii.nome}).slice(0,30)
            },
            yAxis: {   
                type: 'value',
                data: dadosFII?.sort(util_FuncoesComparacao.funcaoComparacaoRendimentoMedioAnual)
                .map(fii => {return fii.rendimentoMedioAnual}).slice(0,10)
            },
            series: [
                {
                    type: 'bar',
                    data: dadosFII?.sort(util_FuncoesComparacao.funcaoComparacaoRendimentoMedioAnual)
                    .map(fii => {
                        return {
                            value: fii.rendimentoMedioAnual === 'N/A' ? 
                            Number.parseFloat('0,00') : Number.parseFloat(fii.rendimentoMedioAnual),

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

    const PieChartCota : typeof PieChart.prototype = {    
        cssProps : {
            width: '800px', height: '600px'
        },
        option : {    
            series: [
                {
                    type: 'pie',
                    radius : '70%',                        
                    data: dadosFII?.sort((a : FIIType, b : FIIType) => {
                        return Number.parseFloat(a.cota) -  Number.parseFloat(b.cota)
                    }).map(fii => {
                        return {
                            name : `${fii.nome} - ${fii.cota}` ,
                            value : fii.cota === 'N/A' ? 
                            Number.parseFloat('0,00') : Number.parseFloat(fii.cota)
                        }
                    })
                    .slice(0,50)
                }
            ]       
        } 
    }

    // Functions --------------------------->
    const atualizarDados = () => setDadosFII(undefined)       
    
    // Jsx --------------------------->
    return (
        <div className="bg-sky-800 w-auto h-full">
            <div className="h-full p-8">                
                <div className="rounded-lg bg-white h-full p-8">    
                    {/* Ícone de Atualizar */}
                    {dadosFII &&
                        <img 
                            alt='Atualizar dados' 
                            src={require('../assets/icons/atualizarIcon.png')}
                            className="w-12 h-12 hover:cursor-pointer hover:animate-spin"
                            onClick={()=> atualizarDados()}
                        />
                    }
                    {/* Ícone de Caregando */}
                    {!dadosFII && Carregando()}
                    {/* Gráficos */}      
                    <div className="flex">                    
                        {/* Pie Chart                                                 */}
                        {dadosFII && 
                            <div className="align-left text-left items-left justify-left mr-auto opacity-70 hover:opacity-100 scale-95 hover:scale-110">
                                {util_FuncoesDOM.tituloDeGrafico('Valor da Cota - Top 50')}
                                <PieChart option={PieChartCota.option} cssProps={PieChartCota.cssProps} />
                            </div>
                        }                    
                        {/* Bar Charts                                                 */}
                        <div>
                            {/* Bar Chart 1 */}
                            {dadosFII && 
                                <div className="align-left text-left items-left justify-left mr-auto opacity-70 hover:opacity-100 scale-95 hover:scale-110">
                                    {util_FuncoesDOM.tituloDeGrafico('Últimos Rendimentos - R$ & %')}
                                    <BarChart option={BarChartUltimosRendimento.option} cssProps={BarChartUltimosRendimento.cssProps}/>
                                </div>
                            } 
                            {/* Bar Chart 2 */}
                            {dadosFII && 
                                <div className="align-left text-left items-left justify-left mr-auto opacity-70 hover:opacity-100 scale-95 hover:scale-110">
                                    {util_FuncoesDOM.tituloDeGrafico('Rendimento Médio Anual')}                                    
                                    <BarChart option={BarChartRendimentoMedioAnual.option} cssProps={BarChartRendimentoMedioAnual.cssProps}/>
                                </div>
                            } 
                        </div>
                    </div>
                    {/* Lista de FII */}  
                    <div className="mt-24">                    
                        {dadosFII &&                        
                            <FIIGrid.Root>
                                <FIIGrid.Cabecalho></FIIGrid.Cabecalho>
                                <div className="h-48 overflow-y-scroll">
                                    <FIIGrid.Dados fiis={dadosFII} callback={()=>{}}/>
                                </div>
                            </FIIGrid.Root>                                            
                        }    
                    </div>                               
                </div>
            </div>
        </div>       
    )
}

export default Dashboard;