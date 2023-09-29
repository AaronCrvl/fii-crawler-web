import React, { ReactNode } from "react";

interface sideNavRootProps {
    children : ReactNode
}

export default function SideNavRoot(props : sideNavRootProps) {    
    return(
        <div className="bg-sky-700 w-fit h-screen">
            {props.children}
        </div>
    )
}