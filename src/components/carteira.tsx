import React from "react";
const iconeCarteira = require('../assets/icons/carteiraIcon.png')
interface CarteiraProps {
    valor : string | number,
}

function Carteira({valor} : CarteiraProps) {
    const modoEscuro = localStorage.getItem('modoEscuro')?.toString()   

    // Hooks --------------------------->
    const [valorState, setValorState] = React.useState<number | string>()
    React.useEffect(()=> {
        if( 
            // Caso tenha atualização no valor ou este seja indefinido
            valorState === undefined
            || valorState !== valor) {
            setValorState(valor)
        }
    }, [valorState])

    // Jsx --------------------------->
    return(
        <div className={modoEscuro === 'sim' ? 'dark' : ''}>
            <React.Fragment>
                <div className="flex text-left text-sky-700 text-4xl ml-32 font-bold w-full dark:text-white">Saldo Atual</div>
                <div className="flex select-none">
                    <img 
                        title="Ícone Carteira"                     
                        src={iconeCarteira}
                        className="w-32 h-32 dark:invert"
                    />            
                    <div>
                        {valorState && 
                            <div className="flex mt-1 left text-sky-700 font-bold w-full dark:text-white">
                                <div style={{fontSize:'100px', marginRight: '20px', marginLeft: '15px'}}>R$</div>
                                <div style={{fontSize:'100px'}}>{valorState}</div>
                            </div>
                        }
                    </div>
                </div>
            </React.Fragment>        
        </div>
    )
}

export default Carteira;