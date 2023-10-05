interface CarregandoProps {
    style?: string
}

export default function Carregando({style} : CarregandoProps) {
    return(
        <div className={style? style : "w-full h-full px-96"}>
            <button disabled>
                <img 
                    alt='loading...' 
                    src={require('../assets/icons/carregandoIcon.png')}
                    className="w-24 h-24 animate-spin mt-96"
                />           
            </button>   
        </div>
    )
}