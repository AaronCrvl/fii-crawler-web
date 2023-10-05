import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface sideNavLogoProps {
    src : string,
}

export default function SideNavLogo({src} : sideNavLogoProps){    const nav = useNavigate()
    const modoEscuro = localStorage.getItem('modoEscuro')?.toString()   

    function reload(){
        nav('/sistema/dashboard')        
        window.location.reload()
    }    

    return (
        <div className={modoEscuro === 'sim' ? 'dark' : ''}>
            <div 
                className="mt-5 p-10 select-none hover:cursor-pointer"
                onClick={()=>reload()}
            >            
                <span className="text-6xl text-white font-black p-0 dark:text-yellow-500">FIICrawler<img src={src} className="ml-32 w-32 h-32 p-0 dark:grayscale" alt='Fii Crawler Logo'/></span>                        
            </div>
        </div>
    )
}