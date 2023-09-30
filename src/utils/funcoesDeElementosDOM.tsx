import { FIIType } from "../interfaces/FIIType";
import { FIIDetalhadoType } from "../interfaces/FiiDetalhadoType";

export default class FuncoesDeElementosDOM {
    public linhaGrid(conteudo: string, tailWindStyle = 'bg-zinc-500 text-lg text-white rounded-lg border-2 border-radius') : JSX.Element {
        return(
            <td className={tailWindStyle}>
                {conteudo}
            </td>
        )
    }

    public tituloDeGrafico(txt : string, style : string = '') : JSX.Element {
        return(
            <div 
                className={style === '' ?
                    "text-blue-900 text-4xl text-center font-bold"
                    : style
                }>
                {txt}
            </div>
        )
    }
}