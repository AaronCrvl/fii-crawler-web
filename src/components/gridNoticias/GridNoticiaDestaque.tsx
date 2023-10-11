import { NoticiaType } from "../../types/NoticiaType"
import Carregando from "../carregando"

interface GridNoticiaDestaqueProps {
    listagem? : NoticiaType[]
}

export default function GridNoticiaDestaque({listagem} : GridNoticiaDestaqueProps) {
    return(        
        <div className="flex w-full rounded-lg p-1">
            {!listagem && <Carregando />}
            {/* Notícia Principal */}
            {listagem &&
                <div 
                    className="rounded-lg p-5 h-full w-full"
                    style={{
                        backgroundImage :  listagem[0].url,                          
                    }}
                >
                    <div className="mt-10 text-black text-lg">{listagem[0].fonte}</div>
                    <div className="mt-10 text-blue-700 text-4xl">{listagem[0].titulo}</div>
                    <div className="mt-10 text-blue-700 text-xl">{listagem[0].descricao}</div>
                </div>
            }
            {/* Notícias Empilhadas */}
            <div>
                {listagem &&                    
                    listagem.map(noticia => {
                        return (
                            <div 
                                className="rounded-lg p-5 h-1/2 w-full"
                                style={{
                                    backgroundImage :  noticia.url,                          
                                }}
                            >
                                <div className="mt-10 text-black text-lg">{noticia.fonte}</div>
                                <div className="mt-10 text-blue-700 text-4xl">{noticia.titulo}</div>
                                <div className="mt-10 text-blue-700 text-xl">{noticia.descricao}</div>
                            </div>
                        )
                    })
                }                             
            </div>            
        </div>
    )
}