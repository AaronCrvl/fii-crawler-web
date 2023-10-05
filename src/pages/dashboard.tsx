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

function Dashboard() {           
    const util_FuncoesComparacao = new FuncoesDeComparacao()
    const util_FuncoesDOM = new FuncoesDeElementosDOM()
    //

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
                            src={ require('../assets/icons/atualizarIcon.png')}
                            className="w-12 h-12 hover:cursor-pointer hover:animate-spin"
                            onClick={()=> atualizarDados()}
                        />
                    }
                    {/* Ícone de Caregando */}
                    {!dadosFII && <Carregando />}
                    {/* Gráficos */}      
                    <div className="flex">                    
                        {/* Pie Chart                                                 */}
                        {dadosFII && 
                            <div className="align-left text-left items-left justify-left mr-auto opacity-70 hover:opacity-100 scale-95 hover:scale-110">
                                {util_FuncoesDOM.tituloDeGrafico('Valor da Cota - Top 50')}
                                <PieChart option={PieChartCotaConfig(dadosFII).option} cssProps={PieChartCotaConfig(dadosFII).cssProps} />
                            </div>
                        }                    
                        {/* Bar Charts                                                 */}
                        <div>
                            {/* Bar Chart 1 */}
                            {dadosFII && 
                                <div className="align-left text-left items-left justify-left mr-auto opacity-70 hover:opacity-100 scale-95 hover:scale-110">
                                    {util_FuncoesDOM.tituloDeGrafico('Últimos Rendimentos - R$ & %')}
                                    <BarChart option={BarChartRendimentoMedioConfig(dadosFII).option} cssProps={BarChartRendimentoMedioConfig(dadosFII).cssProps}/>
                                </div>
                            } 
                            {/* Bar Chart 2 */}
                            {dadosFII && 
                                <div className="align-left text-left items-left justify-left mr-auto opacity-70 hover:opacity-100 scale-95 hover:scale-110">
                                    {util_FuncoesDOM.tituloDeGrafico('Rendimento Médio Anual')}                                    
                                    <BarChart option={BarChartUltimosRendimentoConfig(dadosFII).option} cssProps={BarChartUltimosRendimentoConfig(dadosFII).cssProps}/>
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