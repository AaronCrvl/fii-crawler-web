import React from "react";

interface navbarOption {
    optionIcon : string,
    optionText : string,
    urlPath : string,
    chidren : JSX.Element
}

interface sideNavOptionsProps {
    navBarOptions : Array<navbarOption>
    navBarExtraOptions : Array<navbarOption>    
}

function SideNavOptions({navBarOptions, navBarExtraOptions} : sideNavOptionsProps) : JSX.Element {    
    // Hooks --------------------------->
    const [selectedTab, setSelectedTab] = React.useState<Location>(window.location)

    // Jsx Elements --------------------------->
    function Option ({optionText, optionIcon, urlPath, chidren} : navbarOption) {
        return (
            <li key={'Option_' + Math.random()} className={`flex mb-5 ${selectedTab.pathname === urlPath ? 'opacity-100' : 'opacity-25'} hover:opacity-100 hover:cursor-pointer hover:scale-110`}>
                {selectedTab.pathname === urlPath && <div className="rounded-full bg-white text-white font-bold text-4xl">{`<`}</div>}
                <div className='flex p-5'>                                    
                    <img alt='optionIcon' className={selectedTab.pathname === urlPath ? 'invert w-12 h-12 mr-3 ml-0' : 'w-12 h-12 mr-3 ml-5'} src={optionIcon.toString()}/>                   
                    <a href={urlPath} onClick={()=> setSelectedTab(window.location)} className={selectedTab.pathname === urlPath ? 'ml-0' : 'ml-5'} >
                        <p className="text-white font-bold text-4xl text-left">{optionText}</p>
                    </a>
                </div>
            </li>   
        )
    }

    // Jsx --------------------------->
    return(
        <React.Fragment>
            {/* Opções de Quadro */}
            <ul className="mt-32">
                {navBarOptions.map(option => <Option key={Math.random()} optionText={option.optionText} optionIcon={option.optionIcon} urlPath={option.urlPath} chidren={option.chidren} />)}
            </ul>
            {/* Opções de Configuração */}            
            <ul className="mt-96">
                {navBarExtraOptions.map(option => <Option key={Math.random()}  optionText={option.optionText} optionIcon={option.optionIcon} urlPath={option.urlPath} chidren={option.chidren}/>)}
            </ul>            
        </React.Fragment>
    )
}

export default SideNavOptions;