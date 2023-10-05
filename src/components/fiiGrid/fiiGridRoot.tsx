import React, { ReactNode } from "react";

interface FIIGridRootProps {
    children : ReactNode
}

export default function FIIGridRoot(props : FIIGridRootProps) {    
    return(
        <div className="w-fit rounded-lg">
            {props.children}
        </div>
    )
}