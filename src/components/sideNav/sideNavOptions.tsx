import React from "react";
import { Link } from "react-router-dom";

interface navbarOption {
    optionIcon : string,
    optionText : string,
    urlPath : string,
}

interface sideNavOptionsProps {
    navBarOptions : Array<navbarOption>
    navBarExtraOptions : Array<navbarOption>    
}

function SideNavOptions({navBarOptions, navBarExtraOptions} : sideNavOptionsProps) {    
    // Hooks --------------------------->
    const [selectedTab, setSelectedTab] = React.useState<Location>(window.location)

    // Functions --------------------------->
    function Option (option : navbarOption) {
        return (
            <li key={'Option_' + Math.random()} className="flex ml-0 mb-10 hover:opacity-100 hover:cursor-pointer">
                {selectedTab.pathname == option.urlPath && <div className="rounded-full bg-white mr-1 text-white font-bold text-4xl">{`>`}</div>}
                <div className={selectedTab.pathname == option.urlPath ? 'flex opacity-100 p-5' : 'flex opacity-50 p-5'}>                                    
                    <img alt='optionIcon' className="invert w-12 h-12 mr-1" src={option.optionIcon}/>
                    <a href={option.urlPath} onClick={()=> setSelectedTab(window.location)}>
                        <p className="text-white font-bold text-4xl text-left">{option.optionText}</p>
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
                {navBarOptions.map(option => <Option key={Math.random()} optionText={option.optionText} optionIcon={option.optionIcon} urlPath={option.urlPath} />)}
            </ul>
            {/* Opções de Configuração */}            
            <ul className="mt-96">
                {navBarExtraOptions.map(option => <Option key={Math.random()}  optionText={option.optionText} optionIcon={option.optionIcon} urlPath={option.urlPath} />)}
            </ul>
        </React.Fragment>
    )
}

export default SideNavOptions;