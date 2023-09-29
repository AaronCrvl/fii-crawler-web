import React from "react";

interface sideNavLogoProps {
    src : string,
}

export default function SideNavLogo({src} : sideNavLogoProps){        
    return (
        <div className="mt-5 p-10">
            <span className="text-6xl text-white font-bold p-0">FIICrawler<img src={src} className="ml-24 w-48 h-48 p-0" alt='Fii Crawler Logo'/></span>            
        </div>
    )
}