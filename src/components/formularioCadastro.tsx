import { KeyboardEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsuarioType } from "../types/UsuarioType";
import FIIApi from "../api/fiiApi";
let uniqid = require('uniqid'); 

export default function FormularioCadastro () {    
    const api = new FIIApi()
    const categorias = ['Usuário Atípico', 'Especulador👀', 'Investidor Iniciante', 'Investidor Intermediário', 'Investidor Experiente']    

    // Hooks --------------------------->
    const navigate = useNavigate()
    const [categoria, setCategoria] = useState<number | string>(-1) 
    const usernameInputRef = useRef(null)
    const senhaInputRef = useRef(null)
    const emailInputRef = useRef(null)
    const [mostrarCategoria, setMostrarCategoria] = useState<Boolean>(false) 

    // Functions --------------------------->
    function validarDados() : UsuarioType {                                    
        let _username = (usernameInputRef.current! as HTMLInputElement).value            
        let _senha = (usernameInputRef.current! as HTMLInputElement).value
        let _email = (usernameInputRef.current! as HTMLInputElement).value
        
        if(
            _username.length < 5
            || _email.length < 8
            || _senha.length < 8
        ) {
            throw new Error('Os dados utilizados sao inválidos. O username deve conter mais de 5 caracteres e a senha e e-mail mais de 8.')            
        }

        const usuario : UsuarioType = {
            username : _username,
            senha : _senha,
            email : _email,
            categoria : 1               
        }
        return usuario       
    }

    function criarUsuario() {
        try {
            const usuario = validarDados()
            api.criarUsario(usuario)
            .then(response => {
                if(response.status === 200) {
                    alert('Usuario criado, redirecionando para a página de login.')
                    setTimeout(() => {
                        navigate('', {
                            state : {
                                username : usuario.username,
                                senha : usuario.senha,
                                email : usuario.email
                            }
                        })
                    }, 3000);                    
                }
            })
        }
        catch(e) {
            console.log(e)
            throw new Error('Ocorreu um erro  ao criar o usuário. Verifique o console para mais informaçoes.')            
        }
    }

    function registrarCategoria(categoriaSelecionada : string) {
        setCategoria(categoriaSelecionada)
    }    

    // Jsx --------------------------->
    return (
        <form
            className="p-10 rounded-lg border-2 border-white w-min"              
            onSubmit={criarUsuario}
        >
            <span className="text-white text-left m-auto mb-14 font-bold text-4xl">Preencha os dados</span>
            <div className="w-min mb-5 gap-y-20">
                <div className="flex w-auto m-auto">
                    <span className="text-white text-2xl mr-3">Username: </span>
                    <input
                        ref={usernameInputRef}
                        type="text"
                        placeholder="novo.usuario"
                        className="mb-5 p-5 rounded-lg text-2xl border-2 border-white bg-sky-900 text-white dark:bg-zinc-900"
                    />
                </div>
                <div className="flex w-auto m-auto">
                    <span className="text-white text-2xl mr-3">Senha :</span> 
                    <input
                        ref={senhaInputRef}
                        placeholder="######"
                        type="password"
                        className="mb-5 p-5 rounded-lg text-2xl border-2 border-white bg-sky-900 text-white dark:bg-zinc-900"
                    />
                </div>
                <div className="flex w-auto m-auto">
                    <span className="text-white text-2xl mr-3">Email :</span>
                    <input
                        ref={emailInputRef}                    
                        placeholder="crawler@mail.com"
                        type="email"
                        className="mb-5 p-5 rounded-lg text-2xl border-2 border-white bg-sky-900 text-white dark:bg-zinc-900"
                    />
                    <ul 
                        className="rounded-lg bg-sky-800"
                        onMouseEnter={()=> setMostrarCategoria(true)}
                        onMouseLeave={()=> setMostrarCategoria(false)}
                    >
                        {mostrarCategoria &&
                            categorias.map(categoria => {
                                return (
                                    <li 
                                        key={uniqid()}
                                        className="z-10 bg-sky-700 text-white"
                                        onClick={()=> registrarCategoria(categoria)}
                                        onKeyDown={(event : KeyboardEvent) => {
                                            if(event.key === 'Enter') {
                                                // 😃
                                            }                                            
                                        }}
                                    >
                                        {categoria}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <button className="text-white text-2xl rounded-lg bg-sky-600 p-2">Criar conta</button>
        </form>
    )
}