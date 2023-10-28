import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { JWTContext } from "./contexts/JWTContext";
const usuarioICon = require('../assets/icons/usuarioIcone.png');

export default function Usuario() {
    const nav = useNavigate()
    const jwt = useContext(JWTContext)
    const ehConvidado = jwt === 'convidado' ? true : false             

    function navPaginaConfigPerfil() {
        if(!ehConvidado) {
            nav('/sistemas/configuracoes')            
        }
        else {
            alert("É necessário estar logado para acessar o perfil!")
        }        
    }

    return (
        <div 
            onClick={()=>navPaginaConfigPerfil()}
            className="select-none flex ml-auto p-2 bg-indigo-300 rounded-full hover:bg-indigo-400 hover:cursor-pointer dark:bg-yellow-600 hover:dark:bg-yellow-700"
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