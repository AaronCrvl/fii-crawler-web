import { ReactNode } from "react";

interface FIIFocoRootProps {
    children : ReactNode
}

export default function FIIFocoRoot({children} : FIIFocoRootProps) {
    return(
        <div>{children}</div>
    )
}