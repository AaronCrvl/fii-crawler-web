import React from "react";
import FIIApi from "../api/fiiApi";
import { FIIDetalhadoType } from "../interfaces/FiiDetalhadoType";
import { FIIFocoGrid } from "../components/fiiFocoGrid";
import Carregando from "../components/carregando";
import FuncoesDeElementosDOM from "../utils/funcoesDeElementosDOM";
import Carteira from "../components/carteira";
import { FIIGrid } from "../components/fiiGrid";
import FuncoesDeCalculo from "../utils/funcoesDeCalculo";

export default function MeusFIIs() {
    const api = new FIIApi()    
    const util_FuncoesDOM = new FuncoesDeElementosDOM()
    const util_FuncoesCalculo = new FuncoesDeCalculo()

    // Hooks --------------------------->
    const [meusFii, setMeusFii] = React.useState<FIIDetalhadoType[]>()
    const [fiiFoco, setfiiFoco] = React.useState<FIIDetalhadoType>()
    const [valor, setValor] = React.useState<Number>()

    React.useEffect(()=> {
        if(meusFii === undefined) {
            api.getListaFIIUsuario('User1')
            .then(respostaApi => {      
                if(respostaApi.status === 200 ) {
                    respostaApi.json()
                    .then(json => {
                        let dados = json as FIIDetalhadoType[]
                        setMeusFii(dados)   
                        setfiiFoco(dados.sort()[0])         
                        
                        if(valor == undefined) {
                            setValor(util_FuncoesCalculo.calcularSaldoCarteira(dados))
                        }
                    })
                }
            })            
        }
        else {
                    
        } 
    }, [meusFii])

    // Functions --------------------------->
    const selecionarFii = React.useCallback((codigo : string = '') => {
        if(codigo !== '') {
            console.log(`Trocar para FII ${codigo}`)
            let index : number = -1
            let i = meusFii?.findIndex(fii => {
                return fii.codigoFii === codigo ? meusFii.indexOf(fii) : -1
            })
            if(i !== undefined) {
                index = i
            }

            console.log(`Index: ${index}`)
            let trocaFoco = (index > -1)
            if(trocaFoco) {
                let fii : FIIDetalhadoType = meusFii![index!]
                if(fii !== undefined) {
                    setfiiFoco(fii)   
                }            
            }   
        }     
    }, [])

    // Jsx --------------------------->
    return (
        <div className="bg-sky-800 p-5 w-full h-full">
            <div className="h-full w-auto bg-zinc-100 rounded-lg">    
                <div className="rounded-lg bg-white h-auto w-full p-24">
                {/* Ícone de Caregando */}
                {!meusFii && Carregando()}
                {/* Conteúdo */} 
                {(meusFii && fiiFoco) &&         
                    <div className="rounded-lg bg-white h-full w-full p-1">                        
                        <React.Fragment>
                            <div className="p-5">
                                {/* Carteira */} 
                                <Carteira 
                                    valor={942.50}
                                        // valor === undefined ? 
                                        //0.00 : util_FuncoesCalculo.calcularSaldoCarteira(meusFii!)}
                                />
                                {/* Informações FII Principal */} 
                                <FIIFocoGrid.Root>                                    
                                    <div className="flex mt-24 bg-sky-100 rounded-lg p-5">
                                        <div>
                                            <FIIFocoGrid.Cabecalho 
                                                codigo={fiiFoco?.codigoFii.toUpperCase()} 
                                                variacao={fiiFoco?.variacao}
                                            />
                                            <div className="mt-5">
                                                <FIIFocoGrid.Detalhamento 
                                                    nomeCompleto={fiiFoco?.nomeCompleto}
                                                    segmento={fiiFoco?.administrador.segmento}
                                                    cnpj={fiiFoco?.administrador.cnpj}
                                                    valorizacao={fiiFoco?.valorizacao}
                                                />
                                            </div>
                                        </div>
                                        <div className="ml-60">
                                            {util_FuncoesDOM.tituloDeGrafico('Histórico de Dividendos', 'text-zinc-900 text-4xl text-center font-bold')}
                                            {fiiFoco?.historicoDividendos && 
                                                <FIIFocoGrid.HistoricoDividendo
                                                    lista={fiiFoco?.historicoDividendos}
                                                />
                                            }                                        
                                        </div>
                                    </div>
                                </FIIFocoGrid.Root>
                            </div>
                            {/* Grid Meus FII's */}                             
                            <div className="mt-32">                    
                                {meusFii &&                        
                                    <FIIGrid.Root>
                                        <FIIGrid.Cabecalho></FIIGrid.Cabecalho>
                                        <div className="h-auto mt-auto overflow-y-auto">
                                            <FIIGrid.Dados 
                                                fiis={meusFii} 
                                                callback={()=>selecionarFii}
                                            />
                                        </div>
                                    </FIIGrid.Root>                                            
                                }    
                            </div> 
                        </React.Fragment>
                    </div>
                }
                </div>
            </div>
        </div>        
    )
}