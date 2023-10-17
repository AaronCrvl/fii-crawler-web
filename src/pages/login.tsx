import React from 'react';
import FIIApi from '../api/fiiApi';
import { useNavigate } from 'react-router-dom';
import Carregando from '../components/carregando';
const logo = require('../assets/fiiCrawler-logo.png');

function Login() {        
    const api =  new FIIApi()
    const nav = useNavigate()   
    
    // Hooks --------------------------->
    const email = React.useRef(null)
    const senha = React.useRef(null)    
    const [carregando, setCarregando] = React.useState<boolean>(false)   
    const [animacaoLogo, setAnimacaoLogo] = React.useState<boolean>(false)   
    const [informacaoLogin, setInformacaoLogin] = React.useState<string | undefined>()    
    const [darkMode, setDarkMode] = React.useState(localStorage.getItem('modoEscuro')) 
    React.useEffect(()=> {
        console.log(`Modo Escuro: ${localStorage.getItem('modoEscuro')}`)
        setDarkMode(localStorage.getItem('modoEscuro'))

        console.log('')
    }, [localStorage.getItem('modoEscuro')])
    

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
        let txtSenha = (senha.current! as HTMLInputElement).value        
        
        api.relizarLogin(txtEmail, txtSenha).then(data => {
            if(data.status === 200) {                
                data.json().then((txt = 'H5465ASJSM564557A') => {     
                    localStorage.setItem('jwt', 'H5465ASJSM564557A')    
                    nav(`/sistema/dashboard`)
                    window.location.reload()
                })                                                
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
        localStorage.setItem('jwt', 'convidado')                
        console.log('local: ' + localStorage.getItem('jwt'))
        nav('/sistema/dashboard')                
        window.location.reload()           
    }

    function modoEscuro() {  
        if(darkMode === 'sim') {
          setDarkMode('não')
          localStorage.setItem('modoEscuro', 'não')                        
        }
        else {
          setDarkMode('sim')
          localStorage.setItem('modoEscuro', 'sim')                  
        }    
        window.location.reload()
    }

    function logarComEnter(event : any) {
        // pegar código da tecla        
        let keyCode = event.keyCode ? event.keyCode : event.which;
        // se a tecla pressionada tem código 13 é o Enter
        if(keyCode === 13) {        
            realizarLogin()
        }
    }

    // Jsx --------------------------->
    return(
        <div style={{width: '100%', height: '100vh'}}>            
            <div className={darkMode === 'sim'? 'dark flex' : 'flex'}>
                {/* Container Preenchimento Dados */}
                <div 
                    className="w-full h-screen bg-white dark:bg-zinc-700"
                >
                    <div
                        onClick={()=>modoEscuro()} 
                        className='text-6xl select-none hover:cursor-pointer mt-10'
                    >
                        {darkMode === 'sim' ? '🌞' : '🌚'}
                    </div>
                    <div className='mt-96 text-8xl text-sky-800 dark:text-white'>Realizar Login</div>
                    {carregando && <Carregando />}
                    {!carregando && 
                        <div className='mt-10 inline-grid grid-cols-1 w-auto gap-y-5 p-5 text-xl'>
                            <input 
                                ref={email}                                
                                type="email"  
                                title='preencha com o seu e-mail' 
                                onFocus={()=> usuarioDigitando()}                                
                                onMouseLeave={()=> setAnimacaoLogo(false)}
                                onKeyDown={(event)=> logarComEnter(event)}          
                                placeholder="Entre com seu e-mail"
                                className='rounded-full w-96 bg-zinc-700 text-white p-5 hover:bg-zinc-600 focus:bg-white focus:text-black dark:bg-zinc-500 dark:text-white'
                            />
                            <input                         
                                ref={senha}                                
                                type="text" 
                                onFocus={()=> usuarioDigitando()}
                                onMouseLeave={()=> setAnimacaoLogo(false)}
                                placeholder="Entre com a sua senha"
                                title='preencha com a sua senha' 
                                className='rounded-full w-96 bg-zinc-700 hover:bg-zinc-600 text-white p-5 focus:bg-white focus:text-black dark:bg-zinc-500 dark:text-white'
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
                <div className="w-full h-screen select-none dark:bg-purple-800">
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
                    <div className='text-white font-bold text-8xl dark:text-yellow-500'>
                        FII Crawler
                    </div>         
                    <div className='text-white font-bold text-xl mb-24 dark:text-yellow-500'>
                        Controle seus FII's de maneira fácil e ágil.
                    </div> 
                    <div className='text-white font-bold text-xl '>
                        Para testes:                                                    
                    </div>  
                    <div className='text-white font-bold text-xl'>
                        email : teste@gmail.com                        
                    </div>  
                    <div className='text-white font-bold text-xl mb-24'>
                        senha : vazio
                    </div>                                 
                    <div className='mt-15 text-red-500 bg-white font-bold text-xl animate-pulse'>{informacaoLogin}</div>      
                </div>   
            </div>
        </div>
    )
}

export default Login;