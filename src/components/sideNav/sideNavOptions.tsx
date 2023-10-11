import React from "react";

interface navbarOptionProps {
    optionIcon : string,
    optionText : string,
    urlPath : string,    
    convidado : boolean,
    subOptins? : navbarOptionProps[]
}

interface sideNavOptionsProps {
    navBarOptions : Array<navbarOptionProps>
    navBarExtraOptions : Array<navbarOptionProps>    
}

function SideNavOptions({navBarOptions, navBarExtraOptions} : sideNavOptionsProps) : JSX.Element {      
    const modoEscuro = localStorage.getItem('modoEscuro')?.toString()   

    // Hooks --------------------------->
    const [selectedTab, setSelectedTab] = React.useState<Location>(window.location)

    // Jsx Elements --------------------------->
    function Option ({optionText, optionIcon, urlPath, convidado, subOptins} : navbarOptionProps) {
        return (
            (convidado && (urlPath === '/sistema/meusfiis' || urlPath === '/sistema/configuracoes')) ?
            <React.Fragment></React.Fragment>   
            :
            (
                <li 
                    key={'Option_' + Math.random()} 
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
                                        key={Math.random()}
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

    // Jsx --------------------------->
    return(
        <div className={modoEscuro === 'sim' ? 'dark' : ''}>            
            {/* Opções de Quadro */}
            <ul className="w-min h-auto">
                {navBarOptions.map (
                    option => {
                        return (
                            <Option 
                                key={Math.random()} 
                                optionText={option.optionText} 
                                optionIcon={option.optionIcon} 
                                urlPath={option.urlPath} 
                                convidado={option.convidado} 
                                subOptins={option.subOptins}
                            /> 
                        )
                    }
                )}
            </ul>
            {/* Opções de Configuração */}            
            <div className="h-full">
                <ul className="mt-96 md:mt-72">
                    {navBarExtraOptions.map (
                        option => {
                            return (
                                <Option 
                                    key={Math.random()} 
                                    optionText={option.optionText} 
                                    optionIcon={option.optionIcon} 
                                    urlPath={option.urlPath} 
                                    convidado={option.convidado} 
                                    subOptins={option.subOptins}
                                />
                            )
                        }
                    )}                    
                </ul>
            </div>                        
        </div>
    )
}

export default SideNavOptions;