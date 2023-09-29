import React from "react";

interface FIIiCabecalhoProps {
    src? : string,
}

export default function FIIiCabecalho({src} : FIIiCabecalhoProps){        
    return (
        <div className="w-auto bg-sky-900 font-bold text-white text-xl select-none">
            Listagem de Fiis
        </div>
    )
}