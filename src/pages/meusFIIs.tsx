import React from "react";
import FIIApi from "../api/fiiApi";
import { FIIDetalhadoType } from "../interfaces/FiiDetalhadoType";
import { FIIFocoGrid } from "../components/fiiFocoGrid";
import Carregando from "../components/carregando";
import Carteira from "../components/carteira";
import { FIIGrid } from "../components/fiiGrid";
import FuncoesDeCalculo from "../utils/funcoesDeCalculo";

export default function MeusFIIs() {
    const api = new FIIApi()        
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
                else {

                }
            })            
        }
    }, [meusFii])

    // Functions --------------------------->
    const selecionarFii = (codigo : any = '') => {
        if(meusFii !== undefined) {        
            let codigoFii = codigo.currentTarget.innerText.slice(0,6)
            if(codigoFii !== '') {
                console.log(`Trocar para FII ${codigoFii}`)
                let index : number = -1
                meusFii.forEach(fii => {
                    if(fii.codigoFii === codigoFii) {
                        index = meusFii.indexOf(fii)
                        setfiiFoco(undefined)
                    } 
                })                                   

                setTimeout(()=> {
                    console.log(`Index: ${index}`)
                    let trocaFoco = (index !== undefined && index > -1)
                    if(trocaFoco) {
                        let fii : FIIDetalhadoType = meusFii![index!]                    
                        setfiiFoco(fii)                                   
                    }
                }, 500)
            } 
        }    
    }

    // Jsx --------------------------->
    return (
        <div className="bg-sky-800 p-5 w-full h-full">
            <div className="h-full w-full bg-zinc-100 rounded-lg">    
                <div className="rounded-lg bg-white h-auto w-full p-24 overflow-y-auto">
                {/* Ícone de Caregando */}
                {!meusFii && <Carregando/>}
                {/* Conteúdo */} 
                {meusFii &&         
                    <div className="rounded-lg bg-white h-full w-full p-5">                        
                        <React.Fragment>
                            <div className="p-5">                                
                                {/* Carteira */} 
                                <Carteira 
                                    valor={valor === undefined ?  0.00 : util_FuncoesCalculo.calcularSaldoCarteira(meusFii!).toLocaleString('pt-BR')}
                                />
                                {/* Informações FII Principal */}                                 
                                <FIIFocoGrid.Root>                                    
                                    <div className="flex mt-24 bg-sky-100 rounded-lg p-5">
                                        <div>
                                            <FIIFocoGrid.Cabecalho 
                                                codigo={fiiFoco?.codigoFii.toUpperCase()} 
                                                variacao={fiiFoco?.variacao}
                                            />                                            
                                            <div className="flex gap-48 mt-5 bg-sky-50 rounded-lg p-5">
                                                {/* Ícone de Caregando */}
                                                {!fiiFoco && <Carregando />}
                                                {fiiFoco &&
                                                    <div className="mt-5">
                                                        <FIIFocoGrid.Detalhamento 
                                                            nomeCompleto={fiiFoco?.nomeCompleto}
                                                            segmento={fiiFoco?.administrador.segmento}
                                                            cnpj={fiiFoco?.administrador.cnpj}                                                        
                                                        />
                                                    </div>
                                                }
                                                {fiiFoco &&
                                                    <div className="mt-5">
                                                        <FIIFocoGrid.DetalhamentoValores 
                                                            valorCota={fiiFoco?.cota}
                                                            valorMaximo={'72.89'}
                                                            valorMinimo={'69.50'}
                                                            valorizacao={fiiFoco?.valorizacao}
                                                        />
                                                    </div>
                                                }
                                            </div>
                                        </div>                                        
                                    </div>
                                </FIIFocoGrid.Root>
                                {/* Gráfico */}
                                <div>
                                    
                                </div>
                            </div>
                            {/* Grid Meus FII's */}                             
                            <div className="mt-5 w-full h-full">                    
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