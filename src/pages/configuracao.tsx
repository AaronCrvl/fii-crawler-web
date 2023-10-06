import React from "react";
import FIIApi from "../api/fiiApi";
const usuarioLogo = require('../assets/icons/usuarioIcone.png')

export default function Configuracao() {
    const api = new FIIApi()
    const hash = localStorage.getItem('hash')?.toString()  
    const modoTela = localStorage.getItem('modoEscuro')?.toString()         

    // Hooks --------------------------->
    const email = React.useRef(null)
    const senha = React.useRef(null)    
    const [usuario, setUsuario] = React.useState<{email : undefined | string, password : undefined | string}>({email : undefined, password : undefined})
    React.useEffect(()=> {
        // buscar dados do perfil logado
    }, [usuario])

    // Functions --------------------------->

    // Jsx --------------------------->
    return (
        <div className={modoTela === 'sim' ? "dark w-full" : "w-full"}>        
            <div className="bg-sky-800 w-full h-full dark:bg-zinc-700">
                <div className="h-full w-full p-8 dark:bg-zinc-900">                
                    <div className="rounded-lg bg-white h-full w-full p-5 text-white dark:bg-zinc-700">  
                        <div className="p-10 w-80 ml-auto mr-auto mt-14">
                            <img    
                                alt='usuário ícone'
                                src={usuarioLogo} 
                                className="dark:invert w-60 h-60 mb-32"                        
                            />
                            <input                         
                                ref={email}                                
                                type="text"                                                         
                                placeholder="teste@mail.com"
                                title='preencha com o sua email' 
                                className='rounded-full w-96 bg-sky-700 focus:bg-sky-600 border-4 focus:text-white border-sky-600 dark:border-yellow-600 text-zinc-400 dark:bg-zinc-700 hover:dark:bg-zinc-600 dark:text-white p-5 focus:bg-white focus:text-black dark:bg-zinc-500 dark:text-white mb-12  scale-150'
                            />
                            <input                         
                                ref={senha}                                
                                type="text"                                                         
                                placeholder="##########"
                                title='preencha com a sua senha' 
                                className='rounded-full w-96 bg-sky-700 focus:bg-sky-600 border-4 focus:text-white border-sky-600 dark:border-yellow-600 text-zinc-400 dark:bg-zinc-700 hover:dark:bg-zinc-600 dark:text-white p-5 focus:bg-white focus:text-black dark:bg-zinc-500 dark:text-white mb-12  scale-150'
                            /> 
                            <button 
                                title="atualizar dados do meu perfil"
                                value='atualizar dados do perfil'
                                className="w-auto h-auto text-2xl bg-sky-700 dark:bg-yellow-500 p-5 rounded-full ml-auto mr-auto"
                            >Atualizar Dados</button>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>                
    )
}