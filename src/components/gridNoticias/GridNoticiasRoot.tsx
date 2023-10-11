import { ReactNode } from "react"

type GridNoticiasRootProps = {
    children : ReactNode
}

export default function GridNoticiasRoot({children} : GridNoticiasRootProps) {
    return(<div className="w-full h-full">{children}</div>)
}