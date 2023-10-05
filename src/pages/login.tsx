import React from 'react';
import FIIApi from '../api/fiiApi';
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Carregando from '../components/carregando';
const logo = require('../assets/fiiCrawler-logo.png')

function Login() {        
    const api =  new FIIApi()
    const nav = useNavigate()
    
    // Hooks --------------------------->
    const email = React.useRef(null)
    const senha = React.useRef(null)    
    const [carregando, setCarregando] = React.useState<boolean>(false)   
    const [animacaoLogo, setAnimacaoLogo] = React.useState<boolean>(false)   
    const [informacaoLogin, setInformacaoLogin] = React.useState<string | undefined>()    

    // Functions --------------------------->
    function validarDadosEntrada () {    
        let txtEmail = (email.current! as HTMLInputElement).value        
        let txtSenha = (senha.current! as HTMLInputElement).value        
    }

    function usuarioDigitando() {
        setAnimacaoLogo(true)
    }

    function realizarLogin () {               
        setCarregando(true)
        let txtEmail = (email.current! as HTMLInputElement).value
        console.log(`Email : ${txtEmail}`)       
        let txtSenha = (senha.current! as HTMLInputElement).value
        console.log(`Senha : ${txtSenha}`)       
        
        api.relizarLogin(txtEmail, txtSenha).then(data => {
            if(data.status === 200) {                
                setInformacaoLogin('informacaoLogin')
                nav('/sistema/dashboard')
                window.location.reload()
            }
            else {
                data.json().then((txt)=> {
                    setInformacaoLogin(`Tentativa de login falhou : ${txt}`)                    
                })                
            }

            setCarregando(false)
        })
    }

    function logarComoConvidado () {               
        setCarregando(true)       
        nav('/sistema/dashboard')
        window.location.reload()           
    }

    // Jsx --------------------------->
    return(
        <div style={{width: '100%', height: '100vh'}}>            
            <div className='flex'>
                {/* Container Preenchimento Dados */}
                <div className="w-full h-screen bg-white">
                    <div className='mt-96 text-8xl text-sky-800'>Realizar Login</div>
                    {carregando && <Carregando />}
                    {!carregando && 
                        <div className='mt-10 inline-grid grid-cols-1 w-auto gap-y-5 p-5 text-xl'>
                            <input 
                                ref={email}                                
                                type="email"  
                                title='preencha com o seu e-mail' 
                                onFocus={()=> usuarioDigitando()}
                                onMouseLeave={()=> setAnimacaoLogo(false)}
                                placeholder="Entre com seu e-mail"
                                className='rounded-full w-96 bg-zinc-700 text-white p-5 hover:bg-zinc-600 focus:bg-white focus:text-black'
                            />
                            <input                         
                                ref={senha}                                
                                type="text" 
                                onFocus={()=> usuarioDigitando()}
                                onMouseLeave={()=> setAnimacaoLogo(false)}
                                placeholder="Entre com a sua senha"
                                title='preencha com a sua senha' 
                                className='rounded-full w-96 bg-zinc-700 hover:bg-zinc-600 text-white p-5 focus:bg-white focus:text-black'
                            />   
                            <div className='flex'>
                                <button
                                    onClick={()=> realizarLogin()}
                                    className='bg-yellow-500 hover:bg-yellow-600 p-5 text-white font-bold w-48 rounded-full mr-5'                        
                                >
                                    Acessar Conta
                                </button>   
                                <button
                                    onClick={()=> logarComoConvidado()}
                                    className='bg-indigo-500 hover:bg-indigo-600 p-5 text-white font-bold w-48 rounded-full'                        
                                >
                                    Acessar Como Convidado
                                </button>                                        
                            </div>                    
                        </div>
                    }  
                </div> 
                {/* Container Logo Aplicação */}    
                <div className="w-full h-screen">
                    {animacaoLogo ? 
                        <img
                            alt="logo fii crawler" 
                            src={logo}
                            className='animate-bounce'                            
                        />
                        :
                        <img
                            alt="logo fii crawler" 
                            src={logo}                            
                            className='hover:animate-pulse'
                        />
                    }                    
                    <div className='text-white font-bold text-8xl'>
                        FII Crawler
                    </div>         
                    <div className='text-white font-bold text-xl mb-24'>
                        Controle seus FII's de maneira fácil e ágil.
                    </div>                                    
                    <div className='mt-15 text-red-500 font-bold text-xl animate-pulse'>{informacaoLogin}</div>      
                </div>   
            </div>
        </div>
    )
}

export default Login;