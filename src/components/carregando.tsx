export default function Carregando() {
    return(
        <div className="w-full h-full px-96">
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