import React from "react";

interface navbarOption {
    optionIcon : string,
    optionText : string,
    urlPath : string,    
    convidado : boolean
}

interface sideNavOptionsProps {
    navBarOptions : Array<navbarOption>
    navBarExtraOptions : Array<navbarOption>    
}

function SideNavOptions({navBarOptions, navBarExtraOptions} : sideNavOptionsProps) : JSX.Element {    
    const modoEscuro = localStorage.getItem('modoEscuro')?.toString()   

    // Hooks --------------------------->
    const [selectedTab, setSelectedTab] = React.useState<Location>(window.location)

    // Jsx Elements --------------------------->
    function Option ({optionText, optionIcon, urlPath, convidado} : navbarOption) {
        return (
            (convidado && (urlPath === '/sistema/meusfiis' || urlPath === '/sistema/configuracoes')) ?
            <React.Fragment></React.Fragment>   
            :
            (
                <li key={'Option_' + Math.random()} className={`flex mb-5 ${selectedTab.pathname === urlPath ? 'opacity-100' : 'opacity-25'} hover:opacity-100 hover:cursor-pointer hover:scale-110`}>
                    {selectedTab.pathname === urlPath && <div className="rounded-full bg-white text-white font-bold text-4xl dark:text-yellow-500 dark:bg-yellow-500">{`<`}</div>}
                    <div className='flex p-5'>                                    
                        <img alt='optionIcon' className={selectedTab.pathname === urlPath ? 'invert w-12 h-12 mr-3 ml-0' : 'w-12 h-12 mr-3 ml-5'} src={optionIcon.toString()}/>                   
                        <a href={urlPath} onClick={()=> setSelectedTab(window.location)} className={selectedTab.pathname === urlPath ? 'ml-0' : 'ml-5'} >
                            <p className="text-white font-bold text-4xl text-left dark:text-yellow-500">{optionText}</p>
                        </a>
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
                    {navBarOptions.map(option => <Option key={Math.random()} optionText={option.optionText} optionIcon={option.optionIcon} urlPath={option.urlPath} convidado={option.convidado} />)}
                </ul>
                {/* Opções de Configuração */}            
                <ul className="mt-96">
                    {navBarExtraOptions.map(option => <Option key={Math.random()}  optionText={option.optionText} optionIcon={option.optionIcon} urlPath={option.urlPath} convidado={option.convidado}/>)}
                </ul>            
            </React.Fragment>
        </div>
    )
}

export default SideNavOptions;