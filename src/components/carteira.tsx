import React from "react";

interface CarteiraProps {
    valor : string | number,
}

function Carteira({valor} : CarteiraProps) {
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
        <React.Fragment>
            <div className="flex text-left text-sky-700 text-4xl ml-32 font-bold w-full">Saldo Atual</div>
            <div className="flex select-none">
                <img 
                    title="Ícone Carteira"                     
                    src={require('../assets/icons/carteiraIcon.png')}
                    className="w-32 h-32"
                />            
                <div>
                    {valorState && 
                        <div className="flex mt-1 left text-sky-700 font-bold w-full">
                            <div style={{fontSize:'100px', marginRight: '20px', marginLeft: '15px'}}>R$</div>
                            <div style={{fontSize:'100px'}}>{valorState}</div>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>        
    )
}

export default Carteira;