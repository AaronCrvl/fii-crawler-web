import Nav from "../components/Nav";

export default function PaginaInicial() {    
    const modoEscuro = localStorage.getItem('modoEscuro')?.toString()

    return (
        <div className={modoEscuro === 'sim' ? "dark w-min" : "w-min"}>                         
            <Nav />                                     
        </div>
    )
}