import React, { CSSProperties } from "react";
import BarChart from "../charts/models/barChart";
import FIIApi from "../api/fiiApi";
import { FIIType } from "../interfaces/FIIType";
import PieChart from "../charts/models/pieChart";
import { FIIGrid } from "../components/fiiGrid";
import FuncoesDeComparacao from "../utils/funcoesDeComparacao";
import Carregando from "../components/carregando";
import FuncoesDeElementosDOM from "../utils/funcoesDeElementosDOM";
import PieChartCotaConfig from "../charts/configuracoes/pieChartCotaConfig";
import BarChartRendimentoMedioConfig from "../charts/configuracoes/barChartRendimentoMedioConfig";
import BarChartUltimosRendimentoConfig from "../charts/configuracoes/BarChartUltimosRendimentoConfig";
import Usuario from "../components/usuario";
const atualizarDadosIcone = require('../assets/icons/atualizarIcon.png')

function Dashboard() {               
    const hash = localStorage.getItem('hash')?.toString()  
    const modoTela = localStorage.getItem('modoEscuro')?.toString()     
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
    }, [dadosFII])       

    // Functions --------------------------->
    const atualizarDados = () => setDadosFII(undefined)       
    
    // Jsx --------------------------->
    return (
        <div className={modoTela === 'sim' ? "dark w-full" : "w-full"}>        
            <div className="bg-sky-800 w-auto h-full dark:bg-zinc-700">
                <div className="h-full p-8 dark:bg-zinc-900">                
                    <div className="rounded-lg bg-white h-full p-5 dark:bg-zinc-700">    
                        {/* Ícone de Atualizar */}
                        {dadosFII &&
                            <div className="flex mb-7">
                                <img 
                                    alt='Atualizar dados' 
                                    src={atualizarDadosIcone}
                                    className="w-12 h-12 mr-auto hover:cursor-pointer hover:animate-spin dark:invert"
                                    onClick={()=> atualizarDados()}
                                />
                                <Usuario />
                            </div>
                        }
                        {/* Ícone de Caregando */}
                        {!dadosFII && <Carregando />}
                        {/* Gráficos */}      
                        <div className="flex">                    
                            {/* Pie Chart                                                 */}
                            {dadosFII && 
                                <div className="align-left text-left items-left justify-left mr-auto opacity-70 hover:opacity-100 scale-95 hover:scale-110">
                                    {util_FuncoesDOM.tituloDeGrafico('Valor da Cota - Top 30')}
                                    <PieChart option={PieChartCotaConfig(dadosFII).option} cssProps={PieChartCotaConfig(dadosFII).cssProps} />
                                </div>
                            }                    
                            {/* Bar Charts                                                 */}
                            <div>
                                {/* Bar Chart 1 */}
                                {dadosFII && 
                                    <div className="align-left text-left items-left justify-left mr-auto opacity-70 hover:opacity-100 scale-95 hover:scale-110">
                                        {util_FuncoesDOM.tituloDeGrafico('Rendimento Médio Anual')}                                    
                                        <BarChart option={BarChartRendimentoMedioConfig(dadosFII).option} cssProps={BarChartRendimentoMedioConfig(dadosFII).cssProps}/>
                                    </div>
                                } 
                                {/* Bar Chart 2 */}
                                {dadosFII && 
                                    <div className="align-left text-left items-left justify-left mr-auto opacity-70 hover:opacity-100 scale-95 hover:scale-110">
                                        {util_FuncoesDOM.tituloDeGrafico('Últimos Rendimentos - R$ & %')}
                                        <BarChart option={BarChartUltimosRendimentoConfig(dadosFII).option} cssProps={BarChartUltimosRendimentoConfig(dadosFII).cssProps}/>
                                    </div>
                                } 
                            </div>
                        </div>
                        {/* Lista de FII */}  
                        <div className="mt-24 w-full">                    
                            {dadosFII &&                        
                                <FIIGrid.Root>
                                    <FIIGrid.Cabecalho></FIIGrid.Cabecalho>
                                    <div className="h-48 overflow-y-scroll w-auto">
                                        <FIIGrid.Dados fiis={dadosFII} callback={()=>{}}/>
                                    </div>
                                </FIIGrid.Root>                                            
                            }    
                        </div>                               
                    </div>
                </div>
            </div>   
        </div>    
    )
}

export default Dashboard;