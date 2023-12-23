import React from "react"
import { GridNoticias } from "../components/gridNoticias"
import GridNoticiaDestaque from "../components/gridNoticias/GridNoticiaDestaque"
import { NoticiaType } from "../types/generic/NoticiaType"
import wsNoticia from "../api/wsNoticias"

function Noticia() {    
    const api = new wsNoticia()

    // Hooks --------------------------->
    const [noticias, setNoticias]  = React.useState<NoticiaType[]>()
    React.useEffect(()=>{
        if(noticias === undefined) {
            api.buscarNoticiasFundo(['bcff11', 'tepp11', 'deva11'])
            .then(resposta => {
                if(resposta.status === 200) {
                    resposta.json()
                    .then(dados => setNoticias(dados))
                }
                else {
                    // não autorizado
                    // senha inválida, precisa logar
                }
            })
        }
    }, [noticias])

    // Jsx --------------------------->
    return (        
        <div className="bg-sky-800 p-14 h-full w-full dark:bg-zinc-900">
            <div className="h-full p-10 w-full bg-white dark:bg-zinc-700 rounded-lg">                
                {noticias &&
                    <GridNoticias.Root>     
                        <div className="text-6xl font-bold text-black dark:text-white text-left mb-20">Destaques</div>                       
                        <GridNoticiaDestaque 
                            // apenas 2 notícias
                            listagem={noticias.slice(0,2)}                                
                        />
                        <div className="mt-24">
                            <GridNoticias.Lista
                                listagem={noticias.slice(2, noticias.length-1)}
                            />
                        </div>
                    </GridNoticias.Root>
                }                
            </div>
        </div>        
    )
}

export default Noticia;