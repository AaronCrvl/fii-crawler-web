import React, { ReactNode } from "react";

interface sideNavRootProps {
    children : ReactNode
}

export default function SideNavRoot(props : sideNavRootProps) {    
    return(
        <div className="bg-sky-800 w-fit h-full">
            {props.children}
        </div>
    )
}