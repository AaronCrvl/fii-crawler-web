import React from "react";
type FIIiCabecalhoProps = {
    src? : string,
}

export default function FIIiCabecalho({src} : FIIiCabecalhoProps){            
    return (        
        <div className="w-full bg-sky-900 font-bold rounded-lg text-white text-xl select-none dark:bg-yellow-800">
            Listagem de Fiis
        </div>        
    )
}