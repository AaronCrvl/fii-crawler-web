import React from "react"
import { GridNoticias } from "../components/gridNoticias"
import GridNoticiaDestaque from "../components/gridNoticias/GridNoticiaDestaque"
import { NoticiaType } from "../types/NoticiaType"
import FIIApi from "../api/fiiApi"

function Noticia() {
    const modoEscuro = localStorage.getItem('modoEscuro')?.toString()    
    const api = new FIIApi()

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
        <div className={modoEscuro === 'sim' ? 'dark w-full h-fit' : 'w-full h-fit'}>
            <div className="bg-sky-800 p-14 h-full w-full dark:bg-zinc-900">
                <div className="h-fit w-full bg-white dark:bg-zinc-700 rounded-lg">                
                    {noticias &&
                        <GridNoticias.Root>
                            <GridNoticiaDestaque 
                                // apenas 2 notícias
                                listagem={noticias.slice(0,2)}
                            />
                            <GridNoticias.Lista
                                listagem={noticias}
                            />
                        </GridNoticias.Root>
                    }                
                </div>
            </div>
        </div>
    )
}

export default Noticia;