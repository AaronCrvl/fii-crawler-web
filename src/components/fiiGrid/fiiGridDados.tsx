import React, { CSSProperties } from "react";
import { FIIType } from "../../interfaces/FIIType";

interface FIIGridDadosProps {
    fiis : Array<FIIType>,
}

// Jsx Elements --------------------------->
function linhaFii(conteudo: string, tailWindStyle = 'bg-zinc-500 text-lg text-white rounded-lg border-2 border-radius') : JSX.Element {
    return(
        <td className={tailWindStyle}>
            {conteudo}
        </td>
    )
}

// Jsx --------------------------->
export default function FIIGridDados({fiis} : FIIGridDadosProps) {      
    // Campos de Cabeçalho  
    const camposCabecalho : string[] = 
    ['Nome', 'Último Redimento R$', 'Último Redimento', 'Data de Pagamento', 
    'Data Base', 'Rendimento Médio Anual', 'Patrimônio', 'Cota' ]
    
    return (
        <table className="w-full h-24 border-2 border-sky-900 bg-sky-600 cursor-pointer">
            <thead>
                <tr className="text-zinc-300 bg-sky-800 select-none">
                    {fiis && 
                        camposCabecalho.map(campo => {
                            return (
                                <th>{campo}</th>
                            )
                        })
                    }                
                </tr>
            </thead>
            <tbody>
                {fiis &&
                    fiis.map(fii => {
                        return (
                            <tr className="opacity-70 hover:opacity-100 hover:font-bold roudend-lg">                            
                                {linhaFii(fii.nome)}                            
                                {linhaFii(fii.ultimoRedimentoRS)}                            
                                {linhaFii(fii.ultimosRedimento)}                            
                                {linhaFii(fii.dataPagamento)}                            
                                {linhaFii(fii.dataBase)}                            
                                {linhaFii(fii.rendimentoMedioAnual)}                            
                                {linhaFii(fii.patrimonio)}                            
                                {linhaFii(fii.cota)}                                                                                  
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}