import React from "react";
import { useNavigate } from "react-router-dom";
type sideNavLogoProps = {
    src : string,
}

export default function SideNavLogo({src} : sideNavLogoProps){    
    const nav = useNavigate()
        
    // Functions --------------------------->
    function reload(){
        nav('/sistema/dashboard')        
        window.location.reload()
    }    

    // Jsx --------------------------->
    return (        
        <div 
            role="button"
            className="mt-5 p-10 select-none hover:cursor-pointer"
            onClick={()=>reload()}
            onKeyDown={(()=>{})}
        >            
            <span className="text-6xl text-white font-black p-0 dark:text-yellow-500">FIICrawler<img src={src} className="ml-32 w-32 h-32 p-0 dark:grayscale" alt='Fii Crawler Logo'/></span>                        
        </div>        
    )
}