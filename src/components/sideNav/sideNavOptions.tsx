import React from "react";
import Option from "./option";
import { navbarOptionProps } from "./navBarOptionProps";

type sideNavOptionsProps = {
    navBarOptions : Array<navbarOptionProps>
    navBarExtraOptions : Array<navbarOptionProps>    
}

function SideNavOptions({navBarOptions, navBarExtraOptions} : sideNavOptionsProps) : JSX.Element {     
    var uniqid = require('uniqid'); 

    // Jsx --------------------------->
    return(
        <React.Fragment>            
            {/* Opções de Quadro */}
            <ul className="w-min h-auto">
                {navBarOptions.map (
                    option => {
                        return (
                            <Option 
                                key={uniqid()} 
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
                                    key={uniqid()} 
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
        </React.Fragment>
    )
}

export default SideNavOptions;