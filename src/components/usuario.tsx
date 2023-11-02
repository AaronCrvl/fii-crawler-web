import { useNavigate } from "react-router-dom";
import useJWT from "../hooks/useJWT";
const usuarioICon = require('../assets/icons/usuarioIcone.png');

export default function Usuario() {
    const nav = useNavigate()
    const [jwt, setJWT] = useJWT()
    const ehConvidado = jwt === 'convidado' ? true : false             

    // Functions --------------------------->
    function navPaginaConfigPerfil() {
        if(!ehConvidado) {
            nav('/sistemas/configuracoes')            
        }
        else {
            alert("É necessário estar logado para acessar o perfil!")
        }        
    }

    // Jsx --------------------------->
    return (
        <div 
            className="select-none flex ml-auto p-2 bg-indigo-300 rounded-full hover:bg-indigo-400 hover:cursor-pointer dark:bg-yellow-600 hover:dark:bg-yellow-700"
            onClick={()=>navPaginaConfigPerfil()}
            onKeyDown={(()=>{})}            
        >            
            <img 
                alt='logo usuário'
                src={usuarioICon}
                className="invert w-8 h-8 mr-2"
            />
            <div className="mt-2 ml-2 text-center text-white  text-md font-bold">
                {jwt}
            </div>            
        </div>        
    )
}