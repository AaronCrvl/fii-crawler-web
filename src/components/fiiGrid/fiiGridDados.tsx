import React, { CSSProperties } from "react";
import { FIIType } from "../../types/FIIType";
import FuncoesDeElementosDOM from "../../utils/funcoesDeElementosDOM";
import { FIIDetalhadoType } from "../../types/FIIDetalhadoType";
const carteiraIcone = require('../../assets/icons/carteiraIcon.png');
type FIIGridDadosProps = {
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
    }, [fiisInterno, fiis])

    // Functions --------------------------->
    function checarDados(fiis : Object[]) : Boolean { 
        let tipoSimples = true          
        fiis.forEach(fii => tipoSimples = !fii.hasOwnProperty('administrador'))
        return tipoSimples
    }

    // Jsx --------------------------->
    return (        
        <React.Fragment>
            {tipoSimples ?
                // FIIType Grid
                (
                    <table className="w-full h-24 border-2 border-sky-900 bg-sky-600 cursor-pointer dark:bg-zinc-400">
                        <thead>
                            <tr className="text-zinc-300 bg-sky-800 select-none dark:bg-yellow-700">
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
                                                    src={carteiraIcone} 
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
                    <table className="w-full h-24 border-2 border-sky-900 bg-sky-600 cursor-pointer dark:bg-zinc-400 dark-border-yellow-700">
                        <thead>
                            <tr className="text-zinc-300 bg-sky-800 select-none dark:bg-yellow-700">
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
                                            className="opacity-70 hover:opacity-100 hover:font-bold"
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