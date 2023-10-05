import React from "react";

interface FIIiCabecalhoProps {
    src? : string,
}

export default function FIIiCabecalho({src} : FIIiCabecalhoProps){        
    const modoEscuro = localStorage.getItem('modoEscuro')?.toString()   

    return (
        <div className={modoEscuro === 'sim' ? 'dark' : ''}>
            <div className="w-full bg-sky-900 font-bold rounded-lg text-white text-xl select-none dark:bg-yellow-800">
                Listagem de Fiis
            </div>
        </div>
    )
}