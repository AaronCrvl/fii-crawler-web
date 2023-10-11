import { TransacaoType } from "../types/TransacaoType";

export interface iFIIApi {
    // Auth
    relizarLogin(email : string, senha : string) : Promise<Response>,

    // FII
    getFIIList() : Promise<Response>,
    getListaFIIUsuario(userId : string) : Promise<Response>,
    efetuarCompra(params : TransacaoType) : Promise<Response>,
    efetuarVenda(params : TransacaoType) : Promise<Response>,

    // Notícias
    buscarNoticiasFundo(codigos : string[]) : Promise<Response>,
}      
