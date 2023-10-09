import { TransacaoType } from "../types/TransacaoType";

export interface iFIIApi {
    getFIIList() : Promise<Response>,
    getListaFIIUsuario(userId : string) : Promise<Response>,
    relizarLogin(email : string, senha : string) : Promise<Response>,
    efetuarCompra(params : TransacaoType) : Promise<Response>,
    efetuarVenda(params : TransacaoType) : Promise<Response>
}      
