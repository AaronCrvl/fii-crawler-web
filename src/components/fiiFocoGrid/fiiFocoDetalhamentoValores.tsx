import { ReactNode } from "react";

interface FIIFocoDetalhamentoValoresProps {
    valorCota? : string,
    valorMaximo : string, // 52 semanas
    valorMinimo : string, // 52 semanas
    valorizacao? : string,
}

export default function FIIFocoDetalhamentoValores({valorCota, valorMaximo, valorMinimo, valorizacao} : FIIFocoDetalhamentoValoresProps) {    
    return(                
        <div className="text-zinc-700 text-4xl text-left p-1 ml-24 select-none dark:text-white">            
            <div className="mb-5 font-bold">Informações do Fundo de Investimento</div>
            <div className="font-light text-2xl">
                <p>Valor Cota: {valorCota}</p>
                <p>Valor Máximo - {valorMaximo}</p>
                <p>Valor Mínimo - {valorMinimo}</p>     
                <p className={valorizacao?.includes('-') ? 'flex text-red-600' : 'flex text-green-600'}>Valorização {valorizacao}<p className="text-zinc-700 text-sm">(12 meses)</p></p>                                   
            </div>
        </div>        
    )
}