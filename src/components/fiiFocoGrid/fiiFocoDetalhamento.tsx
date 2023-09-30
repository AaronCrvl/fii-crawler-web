import { ReactNode } from "react";

interface FIIFocoDetalhamentoProps {
    nomeCompleto? : ReactNode,
    variacao? : string,
    segmento? : string,
    cnpj? : string,
    valorizacao? : string,
}

export default function FIIFocoDetalhamento({nomeCompleto, segmento, cnpj, valorizacao} : FIIFocoDetalhamentoProps) {
    return(        
        <div className="text-zinc-700 text-4xl text-left p-1 ml-24 select-none">
            <p>{nomeCompleto}</p>
            <p>Segmento - {segmento}</p>
            <p>CNPJ - {cnpj}</p>            
            <p className={valorizacao?.includes('-') ? 'text-red-600' : 'text-green-600'}>Valorização (12 meses) de {valorizacao}</p>            
        </div>
    )
}