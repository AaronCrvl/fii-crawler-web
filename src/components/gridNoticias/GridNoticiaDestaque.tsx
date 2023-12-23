import { NoticiaType } from "../../types/generic/NoticiaType"
import Carregando from "../carregando"
let uniqid = require('uniqid'); 

type GridNoticiaDestaqueProps = {
    listagem? : NoticiaType[]
}

export default function GridNoticiaDestaque({listagem} : GridNoticiaDestaqueProps) {        
    return(        
        <div className="flex w-full h-full rounded-lg p-5">
            {!listagem && <Carregando />}            
            {/* Notícia Principal */}            
            {listagem &&
                <div 
                    className="text-left rounded-lg mr-16 p-7 h-96 w-full bg-sky-200 hover:scale-110 hover:cursor-pointer dark:bg-yellow-200"
                    style={{
                        backgroundImage :  listagem[0].url,                          
                    }}
                >
                    <div className="mt-10 text-black font-bold text-xl">{listagem[0].fonte}</div>
                    <div className="mt-10 text-blue-900 font-bold text-4xl dark:text-black">{listagem[0].titulo}</div>
                    <div className="mt-10 text-blue-500 text-xl dark:text-zinc-500">{listagem[0].descricao}</div>
                </div>
            }
            {/* Notícias Empilhadas */}
            <div className="w-full gap-48">
                {listagem &&                    
                    listagem.map(noticia => {
                        return (
                            <div 
                                key={uniqid()}
                                className="rounded-lg p-4 h-48 w-full bg-indigo-200  mb-3 text-left hover:scale-110 hover:cursor-pointer dark:bg-amber-500"                                
                            >
                                <div className="text-black font-bold text-md">{noticia.fonte}</div>
                                <div className="text-blue-900 font-bold mb-5 text-2xl dark:text-white">{noticia.titulo}</div>
                                <div className="text-blue-500 text-lg dark:text-zinc-600">{noticia.descricao}</div>
                            </div>
                        )
                    })
                }                             
            </div>            
        </div>
    )
}