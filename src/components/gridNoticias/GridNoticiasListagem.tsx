import React from "react";
import { NoticiaType } from "../../types/NoticiaType";

interface NoticiasProps {    
    listagem : NoticiaType[]
}

export default function GridNoticiasListagem({listagem} : NoticiasProps) {        
    // Jsx --------------------------->
    return(
        <div className="w-full">            
            <div className="text-4xl text-black">Notícias da Carteira</div>
            {listagem &&
                listagem.map(noticia => {
                    return(
                        <div className="p-2">
                            <div className="w-full h-12">
                                {/* <div>{noticia.svg}</div> */}
                                <div className="text-md text-white">{noticia.fonte}</div>
                            </div>
                            <div className="text-4xl text-black"><a href={noticia.url}>{noticia.titulo}</a></div>
                            <div className="text-lg text-black">{noticia.descricao}</div>
                            <div className="text-lg text-zinc-600">{noticia.tempoPassado}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}