import React, { ReactNode } from "react";

interface sideNavRootProps {
    children : ReactNode
}

export default function SideNavRoot(props : sideNavRootProps) {    
    const modoEscuro = localStorage.getItem('modoEscuro')?.toString()   
    return(
        <div className={modoEscuro === 'sim' ? 'dark' : ''}>
            <div className="bg-sky-800 w-fit h-fit dark:bg-zinc-900">
                {props.children}
            </div>
        </div>
    )
}