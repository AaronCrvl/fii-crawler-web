import { ReactNode } from "react";
import { DividendoType } from "../../interfaces/DividendoType";
import FuncoesDeElementosDOM from "../../utils/funcoesDeElementosDOM";

interface FIIFocoHistoricoDividendoProps {
    
        lista? : DividendoType[] | undefined
    
}

export default function FIIFocoHistoricoDividendo({lista} : FIIFocoHistoricoDividendoProps) {
    // Campos de Cabeçalho  
    const camposCabecalho : string[] = 
    ['Data Base', 'Data de Pagamento', 'Cotação Base', 
    'Dividendo Yeild', 'Rendmento']
    
    const util = new FuncoesDeElementosDOM()
    const tailwindStyle = 'bg-zinc-500 text-lg text-white border-2 border-radius p-5'

    return(        
        <table className="w-full h-24 border-2 border-zinc-900 cursor-pointer">
            <thead>
                <tr className="text-zinc-300 bg-zinc-800 select-none">
                    {lista && 
                        camposCabecalho.map(campo => {
                            return (
                                <th 
                                    key={Math.random()}
                                    className="p-2"
                                >{campo}</th>
                            )
                        })
                    }                
                </tr>
            </thead>
            <tbody>
                {lista &&
                    lista?.map(dividendo => {
                        return (
                            <tr 
                                key={Math.random()}
                                className="opacity-70 hover:opacity-100 hover:font-bold roudend-lg"
                            >                                                 
                                {util.linhaGrid(dividendo.dataBase, tailwindStyle)}                            
                                {util.linhaGrid(dividendo.dataPagamento, tailwindStyle)}                       
                                {util.linhaGrid(dividendo.cotacaoBase, tailwindStyle)}                                 
                                {util.linhaGrid(dividendo.dividendoYeild, tailwindStyle)}                            
                                {util.linhaGrid(dividendo.rendimento, tailwindStyle)}                                                                                                          
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}