import { useNavigate } from "react-router-dom";
const usuarioICon = require('../assets/icons/usuarioIcone.png');

export default function Usuario() {
    const hash = localStorage.getItem('hash')?.toString()        
    const nav = useNavigate()
    const modoEscuro = localStorage.getItem('modoEscuro')?.toString()   

    function navPaginaConfigPerfil() {
        nav('/sistemas/configuracoes')
        window.location.reload()
    }

    return (
        <div className={modoEscuro === 'sim' ? 'dark' : ''}>
        <div 
            onClick={()=>navPaginaConfigPerfil()}
            className="select-none flex ml-auto p-3 bg-indigo-300 rounded-lg hover:bg-indigo-400 hover:cursor-pointer dark:bg-yellow-600 hover:dark:bg-yellow-700"
        >            
            <img 
                alt='logo usuário'
                src={usuarioICon}
                className="invert w-12 h-12 mr-2"
            />
            <div className="mt-2 ml-2 text-center text-white  text-md font-bold">{hash}</div>            
        </div>
        </div>
    )
}