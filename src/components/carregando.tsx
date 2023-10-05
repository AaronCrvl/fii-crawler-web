interface CarregandoProps {
    style?: string
}

const carregandoIcon = require('../assets/icons/carregandoIcon.png')

export default function Carregando({style} : CarregandoProps) {
    return(
        <div className={style? style : "w-full h-full px-96"}>
            <button disabled>
                <img 
                    alt='loading...' 
                    src={carregandoIcon}
                    className="w-24 h-24 animate-spin mt-96"
                />           
            </button>   
        </div>
    )
}