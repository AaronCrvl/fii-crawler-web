import React from "react";

interface subOptinsProps {    
    optionText : string,
    optionIcon : string,
    urlPath : string,
}

interface navbarOptionProps {
    optionIcon : string,
    optionText : string,
    urlPath : string,    
    convidado : boolean,
    subOptins? : subOptinsProps[]
}

interface sideNavOptionsProps {
    navBarOptions : Array<navbarOptionProps>
    navBarExtraOptions : Array<navbarOptionProps>    
}

function SideNavOptions({navBarOptions, navBarExtraOptions} : sideNavOptionsProps) : JSX.Element {  
    if( navBarExtraOptions[0].subOptins !== undefined) {
        console.log('Opções: ' + navBarOptions[0].subOptins![0].optionText)
    }
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
                    className={`flex mb-5 ${selectedTab.pathname === urlPath ? 'opacity-100' : 'opacity-25'} hover:opacity-100 hover:cursor-pointer hover:scale-110`}
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
                            <p className="text-white font-bold text-4xl text-left dark:text-yellow-500">{optionText}</p>                         
                        </a>          
                        <ul>              
                            {(subOptins && selectedTab.pathname === urlPath) &&
                                subOptins?.map(subOption => {
                                    return (
                                        <li key={Math.random()}>
                                            <img 
                                                alt='subOptionIcon'                             
                                                src={subOption.optionIcon}
                                                className={selectedTab.pathname === subOption.urlPath ? 'invert w-12 h-12 mr-3 ml-0' : 'w-12 h-12 mr-3 ml-5'} 
                                            /> 
                                            <a href={subOption.urlPath}>
                                                {subOption.optionText}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </li>   
            )                     
        )
    }

    // Jsx --------------------------->
    return(
        <div className={modoEscuro === 'sim' ? 'dark' : ''}>
            <React.Fragment>
                {/* Opções de Quadro */}
                <ul className="mt-32">
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
                <ul className="mt-96">
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
            </React.Fragment>
        </div>
    )
}

export default SideNavOptions;