import React from "react";
import { NoticiaType } from "../../types/NoticiaType";

interface NoticiasProps {    
    listagem : NoticiaType[]
}

export default function GridNoticiasListagem({listagem} : NoticiasProps) {        
    const modoEscuro = localStorage.getItem('modoEscuro')?.toString()    

    function definirCor({tempoPassado} : NoticiaType ){
        if(tempoPassado.includes('segundos')){
            return 'bg-blue-300 dark:bg-zinc-300'
        }
        
        if(tempoPassado.includes('minutos')){
            return 'bg-blue-400 dark:bg-zinc-400'
        }

        if(tempoPassado.includes('horas')){
            return 'bg-blue-500 dark:bg-zinc-500'
        }

        if(tempoPassado.includes('dias')){
            return 'bg-blue-600 dark:bg-zinc-600'
        }

        if(tempoPassado.includes('meses')){
            return 'bg-blue-700 dark:bg-zinc-700'
        }

        return ''
    }
    // Jsx --------------------------->
    return(
        <div className={modoEscuro === 'sim' ? 'dark' : '' + "h-max w-full"}>            
            <div className="text-6xl text-black text-left dark:text-white mb-15">Lista de Notícias</div>
            <div className="h-60 md:48 mt-15 md:mt-10 overflow-y-scroll">
                {listagem &&
                    listagem.map(noticia => {
                        return(
                            <div 
                                className={"rounded-lg p-5 text-left mt-10 scale-90 hover:scale-95 hover:cursor-pointer border-4 border-black dark:border-white dark:border-zinc-700"
                                + definirCor(noticia)
                                }
                            >
                                <div className="w-full h-12">
                                    {/* <div>{noticia.svg}</div> */}
                                    <div className="text-md text-white">{noticia.fonte}</div>
                                </div>
                                <div className="text-4xl text-sky-800 dark:text-white"><a href={noticia.url}>{noticia.titulo}</a></div>
                                <div className="text-lg text-black dark:text-amber-400">{noticia.descricao}</div>
                                <div className="text-lg text-zinc-600">{noticia.tempoPassado}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}