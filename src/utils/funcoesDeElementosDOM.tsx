import { FIIType } from "../types/FIIType";
import { FIIDetalhadoType } from "../types/FIIDetalhadoType";

export default class FuncoesDeElementosDOM {
    public linhaGrid(conteudo: string, tailWindStyle = 'bg-zinc-500 text-lg text-white rounded-lg border-2 border-radius') : JSX.Element {
        return(
            <td className={tailWindStyle}>
                {conteudo}
            </td>
        )
    }

    public tituloDeGrafico(txt : string, style : string = '') : JSX.Element {
        const modoEscuro = localStorage.getItem('modoEscuro')?.toString()   

        return(
            <div className={modoEscuro === 'sim' ? 'dark' : ''}>
            <div 
                className={style === '' ?
                    "text-blue-900 text-4xl text-center font-bold dark:text-white"
                    : style
                }>
                {txt}
            </div>
            </div>
        )
    }
}