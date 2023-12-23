import React from "react";
import WsFII from "../api/WsFII";
import useJWT from "../hooks/useJWT";
import { eTipoInvestidor } from "../types/enum/eTipoInvestidor";
const usuarioLogo = require('../assets/icons/usuarioIcone.png')

export default function Configuracao() {
    const api = new WsFII()
    const [jwt, setJWT] = useJWT()   
    const categorias = eTipoInvestidor.map(tipo => tipo)           

    // Hooks --------------------------->
    const [mostrarTipoInvestidor, setMostrarTipoInvestidor] =  React.useState<boolean>(false)
    const email = React.useRef(null)
    const senha = React.useRef(null)    
    const [usuario, setUsuario] = React.useState<{email : undefined | string, password : undefined | string}>({email : undefined, password : undefined})
    React.useEffect(()=> {
        // buscar dados do perfil logado
    }, [usuario])    

    // Jsx --------------------------->
    return (        
        <div className="bg-sky-800 w-full h-screen dark:bg-zinc-700">
            <div className="h-full w-full p-8 dark:bg-zinc-900">                
                <div className="rounded-lg bg-white h-full w-full p-5 text-white dark:bg-zinc-700">  
                    <div className="p-10 w-80 ml-auto mr-auto mt-14">
                        <img    
                            alt='usuário ícone'
                            src={usuarioLogo} 
                            className="dark:invert w-60 h-60 mb-32"                        
                        />
                        <div className="flex cols-2 gap-48 justify-center">
                            <input                         
                                ref={email}                                
                                type="text"                                                         
                                placeholder="teste@mail.com"
                                title='Preencha com o sua email' 
                                className='rounded-full w-96 bg-sky-700 focus:bg-sky-600 border-4 focus:text-white border-sky-600 dark:border-yellow-600 text-zinc-400 dark:bg-zinc-700 hover:dark:bg-zinc-600 dark:text-white p-5 focus:bg-white focus:text-black dark:bg-zinc-500 dark:text-white mb-12  scale-150'
                            />
                            <input                         
                                ref={senha}                                
                                type="text"                                                         
                                placeholder="senha@Teste2929"
                                title='Preencha com a sua senha' 
                                className='rounded-full w-96 bg-sky-700 focus:bg-sky-600 border-4 focus:text-white border-sky-600 dark:border-yellow-600 text-zinc-400 dark:bg-zinc-700 hover:dark:bg-zinc-600 dark:text-white p-5 focus:bg-white focus:text-black dark:bg-zinc-500 dark:text-white mb-12  scale-150'
                            /> 
                        </div>
                        <div className="mb-10">
                            <button                                                                                                                                          
                                className='hover:bg-sky-600 text-white p-2 w-fit bg-sky-700 focus:bg-sky-600 border-4 border-sky-600 dark:border-yellow-600 text-zinc-400 dark:bg-zinc-700 hover:dark:bg-zinc-600 dark:text-white p-5 focus:bg-white focus:text-black dark:bg-zinc-500 dark:text-white mb-12  scale-150'
                                onClick={()=>setMostrarTipoInvestidor(!mostrarTipoInvestidor)}
                            >
                                {mostrarTipoInvestidor ? 
                                    <ul className="w-fit cursor-pointer gap-y-4 dark:border-yellow-500 transition delay-700 duration-100 ease-in-out">                                
                                    {mostrarTipoInvestidor &&
                                        categorias.map(tipoInvestidor => {
                                            return (
                                                <li 
                                                    className="text-center p-2 text-black hover:bg-zinc-300 dark:text-white dark:hover:bg-purple-300"
                                                    onClick={()=>setMostrarTipoInvestidor(!mostrarTipoInvestidor)}
                                                    onKeyUp={()=>setMostrarTipoInvestidor(!mostrarTipoInvestidor)}
                                                >
                                                    {tipoInvestidor}
                                                </li>
                                            )
                                        })
                                    }
                                    </ul>
                                :                                 
                                'Selecione o tipo de perfil'}
                            </button>                            
                        </div> 
                        <button 
                            title="atualizar dados do meu perfil"
                            value='atualizar dados do perfil'
                            className="w-auto h-auto text-2xl bg-green-700 dark:bg-green-500 p-5 rounded-full ml-auto mr-auto"
                        >
                            Atualizar Dados
                        </button>
                    </div>
                </div>                    
            </div>
        </div>                   
    )
}