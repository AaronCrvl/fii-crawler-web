import { ReactNode } from "react";

interface FIIFocoDetalhamentoProps {
    nomeCompleto? : ReactNode,
    variacao? : string,
    segmento? : string,
    cnpj? : string,    
}

export default function FIIFocoDetalhamento({nomeCompleto, segmento, cnpj} : FIIFocoDetalhamentoProps) {
    return(        
        <div className="text-zinc-700 text-4xl text-left p-1 ml-24 select-none">            
            <div className="mb-5 font-bold">Informações do Administrador</div>
            <div className="font-light text-2xl">
                <p>{nomeCompleto}</p>
                <p>Segmento - {segmento}</p>
                <p>CNPJ - {cnpj}</p>                            
            </div>
        </div>
    )
}