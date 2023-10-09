import { DividendoType } from "../types/DividendoType";
import { FIIType } from "../types/FIIType";
import { FIIDetalhadoType } from "../types/FIIDetalhadoType";

export default class FuncoesDeComparacao {
    funcaoComparacaoRendimentoMedioAnual(a : FIIType, b : FIIType) {        
        const nameA = Number.parseFloat(a.rendimentoMedioAnual)
        const nameB = Number.parseFloat(b.rendimentoMedioAnual)

        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }                
        return 0;    
    }

    funcaoComparacaoRendimentoValor(a : FIIType, b : FIIType) {        
        const nameA = Number.parseFloat(a.ultimosRedimento)
        const nameB = Number.parseFloat(b.ultimosRedimento)

        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }                
        return 0;    
    }

    funcaoComparacaoValorizacao(a : FIIDetalhadoType, b : FIIDetalhadoType) {        
        const nameA = Number.parseFloat(a.valorizacao)
        const nameB = Number.parseFloat(b.valorizacao)

        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }                
        return 0;    
    }

    funcaoComparacaoDataBase(a : DividendoType, b : DividendoType) {        
        const nameA = Number.parseFloat(a.dataBase)
        const nameB = Number.parseFloat(b.dataBase)

        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }                
        return 0;    
    }
}