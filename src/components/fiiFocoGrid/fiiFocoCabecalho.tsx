import { ReactNode } from "react";

interface FIIFocoCabecalhoProps {
    codigo? : ReactNode,
    variacao? : string,
}

export default function FIIFocoCabecalho({codigo, variacao} : FIIFocoCabecalhoProps) {
    return(        
        <div className="text-left text-4xl font-bold select-none">
            <span className="bg-sky-700 text-lg text-sky-700 font-bold p-3 h-1 w-1 rounded-full">°</span>
            <span className="text-6xl ml-7 w-96 text-sky-700 font-bold">{codigo}</span>
            <span className={variacao?.includes('-') ? 'ml-5 text-red-500' : 'ml-5 text-green-500'}>{variacao}</span>
        </div>        
    )
}