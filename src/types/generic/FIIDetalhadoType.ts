import { DividendoType } from "./DividendoType"
import { AdministradorType } from "./AdministradorType"

export type FIIDetalhadoType = {    
    userId : string,
    qtdCotas : string,
    dataDeCompra : string[],
    codigoFii : string,
    nomeCompleto : string,
    cota: string,
    variacao : string,
    valorizacao : string,
    historicoDividendos : DividendoType[],
    administrador : AdministradorType,
}