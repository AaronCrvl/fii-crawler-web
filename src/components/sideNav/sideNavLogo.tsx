import React from "react";

interface sideNavLogoProps {
    src : string,
}

export default function SideNavLogo({src} : sideNavLogoProps){        
    return (
        <div className="mt-5 p-10 select-none">
            <span className="text-6xl text-white font-black p-0">FIICrawler<img src={src} className="ml-32 w-32 h-32 p-0" alt='Fii Crawler Logo'/></span>            
        </div>
    )
}