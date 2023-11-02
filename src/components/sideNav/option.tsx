import React from "react";
import { navbarOptionProps } from "./navBarOptionProps";
var uniqid = require('uniqid'); 

export default function Option ({optionText, optionIcon, urlPath, convidado, subOptins} : navbarOptionProps) {
    // Hooks --------------------------->
    const [selectedTab, setSelectedTab] = React.useState<Location>(window.location)  

    return (
        (convidado && (urlPath === '/sistema/meusfiis' || urlPath === '/sistema/configuracoes' || urlPath === '/sistema/noticias')) ?
        <React.Fragment></React.Fragment>   
        :
        (
            <li 
                key={'Option_' + uniqid()} 
                className={`flex mb-5 md:mb-2 ${selectedTab.pathname === urlPath ? 'opacity-100' : 'opacity-25'} w-fit hover:opacity-100 hover:cursor-pointer hover:scale-110`}
            >
                {selectedTab.pathname === urlPath && <div className="rounded-full bg-white text-white font-bold text-4xl dark:text-yellow-500 dark:bg-yellow-500">{`<`}</div>}
                <div className='flex p-5'>                                    
                    <img 
                        alt='optionIcon'                             
                        src={optionIcon.toString()}
                        className={selectedTab.pathname === urlPath ? 'invert dark:invert w-12 h-12 mr-3 ml-0' : 'dark:invert w-12 h-12 mr-3 ml-5'} 
                    />                   
                    <a 
                        href={urlPath} 
                        onClick={()=> setSelectedTab(window.location)} 
                        className={selectedTab.pathname === urlPath ? 'ml-0' : 'ml-5'} 
                    >   
                        <p className="text-white font-bold text-4xl text-left dark:text-yellow-500 md:text-2xl">{optionText}</p>                         
                    </a>                                                      
                </div>
                <div>              
                    {/* {(subOptins && selectedTab.pathname === urlPath) && */}
                    {subOptins &&
                        subOptins?.map(subOption => {
                            return (
                                <div 
                                    key={uniqid()}
                                    className="text-2xl text-white"
                                >
                                    <img 
                                        alt='subOptionIcon'                             
                                        src={subOption.optionIcon}
                                        className={selectedTab.pathname === subOption.urlPath ? 'invert w-12 h-12 mr-3 ml-0' : 'w-12 h-12 mr-3 ml-5'} 
                                    /> 
                                    <div>
                                        {subOption.optionText}
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
            </li>   
        )                     
    )
}