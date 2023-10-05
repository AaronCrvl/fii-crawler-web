import React, { CSSProperties } from "react";
import { FIIType } from "../../interfaces/FIIType";
import FuncoesDeElementosDOM from "../../utils/funcoesDeElementosDOM";
import { FIIDetalhadoType } from "../../interfaces/FiiDetalhadoType";
const carteiraIcon = require('../../assets/icons/carteiraIcon.png')

interface FIIGridDadosProps {
    fiis : Array<FIIType | FIIDetalhadoType>,
    callback : Function,
}

// Jsx --------------------------->
export default function FIIGridDados({fiis, callback} : FIIGridDadosProps) {      
    // Campos de Cabeçalho  
    const camposCabecalhoFIIType : string[] = 
    ['', 'Nome', 'Último Redimento R$', 'Último Redimento', 'Data de Pagamento', 
    'Data Base', 'Rendimento Médio Anual', 'Patrimônio', 'Cota']

    const camposCabecalhoFIIDetalhadoType : string[] = 
    ['Código', 'Nome', 'Cota', 'Valorização', 'Variacao',]

    const util = new FuncoesDeElementosDOM()
    const tipoSimples = checarDados(fiis)

    // Hooks --------------------------->
    const [fiisInterno, setFII] = React.useState<Array<FIIType | FIIDetalhadoType>>()

    React.useEffect(() => {
        if( fiisInterno === undefined
        || fiisInterno !== fiis ) {
            setFII(fiis)
        }
    }, [fiisInterno])

    // Functions --------------------------->
    function checarDados(fiis : Object[]) : Boolean { 
        let tipoSimples = true          
        fiis.forEach(fii => {
            tipoSimples = !fii.hasOwnProperty('administrador')
        })
        return tipoSimples
    }

    // Jsx --------------------------->
    return (
        <React.Fragment>
            {tipoSimples ?
                // FIIType Grid
                (
                    <table className="w-full h-24 border-2 border-sky-900 bg-sky-600 cursor-pointer">
                        <thead>
                            <tr className="text-zinc-300 bg-sky-800 select-none">
                                {fiis && 
                                    camposCabecalhoFIIType.map(campo => {
                                        return (
                                            <th
                                                key={Math.random()}
                                            >{campo}</th>
                                        )
                                    })
                                }                
                            </tr>
                        </thead>
                        <tbody>
                            {(fiis && fiisInterno) &&
                                fiisInterno.map((fundo) => {
                                    // casting array
                                    let fii = fundo as FIIType
                                    return (
                                        <tr 
                                            key={Math.random()} 
                                            className="opacity-70 hover:opacity-100 hover:font-bold roudend-lg"
                                        >                            
                                            <div className="btn border-2 p-1">
                                                <img 
                                                    alt='adicionar a carteira' 
                                                    src={carteiraIcon} 
                                                    className="ml-5 w-6 h-6 hover:invert"
                                                />
                                            </div>
                                            {util.linhaGrid(fii.nome)}                            
                                            {util.linhaGrid(fii.ultimoRedimentoRS)}                            
                                            {util.linhaGrid(fii.ultimosRedimento)}                            
                                            {util.linhaGrid(fii.dataPagamento)}                            
                                            {util.linhaGrid(fii.dataBase)}                            
                                            {util.linhaGrid(fii.rendimentoMedioAnual)}                            
                                            {util.linhaGrid(fii.patrimonio)}                            
                                            {util.linhaGrid(fii.cota)}                                                                                  
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                )
                :
                // FIIDetalhadoType Grid
                (
                    <table className="w-full h-24 border-2 border-sky-900 bg-sky-600 cursor-pointer">
                        <thead>
                            <tr className="text-zinc-300 bg-sky-800 select-none">
                                {fiis && 
                                    camposCabecalhoFIIDetalhadoType.map(campo => {
                                        return (
                                            <th
                                                key={Math.random()}
                                            >{campo}</th>
                                        )
                                    })
                                }                
                            </tr>
                        </thead>
                        <tbody>
                            {(fiis && fiisInterno) &&
                                fiisInterno.map((fundo) => {
                                    // casting array
                                    let fii = fundo as FIIDetalhadoType
                                    return (
                                        <tr 
                                            key={Math.random()} 
                                            onClick={callback(fii.codigoFii)}
                                            className="opacity-70 hover:opacity-100 hover:font-bold roudend-lg"
                                        >                                                                   
                                            {util.linhaGrid(fii.codigoFii)}                            
                                            {util.linhaGrid(fii.nomeCompleto)}                            
                                            {util.linhaGrid(fii.cota)}                            
                                            {util.linhaGrid(fii.valorizacao)}                            
                                            {util.linhaGrid(fii.variacao)}                                                                                                                                                    
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                )         
            }    
        </React.Fragment>   
    )
}