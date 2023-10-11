const carregandoIcon = require('../assets/icons/carregandoIcon.png')
interface CarregandoProps {
    style?: string
}

export default function Carregando({style} : CarregandoProps) {
    const modoEscuro = localStorage.getItem('modoEscuro')?.toString()   
    return(
        <div className={modoEscuro === 'sim' ? 'dark w-full h-full ' : 'w-full h-full '}>
            <div className={style? style : "px-96"}>
                <button disabled>
                    <img 
                        alt='loading...' 
                        src={carregandoIcon}
                        className="w-24 h-24 animate-spin mt-96 dark:invert"
                    />           
                </button>   
            </div>
        </div>
    )
}