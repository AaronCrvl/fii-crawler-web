import React, { ReactNode } from "react";
type sideNavRootProps = {
    children : ReactNode
}

export default function SideNavRoot(props : sideNavRootProps) {           
    return(        
        <div className="bg-sky-800 w-fit h-fit dark:bg-zinc-900">
            {props.children}
        </div>        
    )
}