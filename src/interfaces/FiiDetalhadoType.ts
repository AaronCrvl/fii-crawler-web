export interface FIIDetalhadoType {    
    codigoFii : string,
    nomeCompleto : string,
    cota: string,
    variacao : string,
    valorizacao : string
    historicoDividendos : Array<DividendoType>,
    administrador : Administrador,
}

interface DividendoType {
    dataBase : string,
    dataPagamento : string,
    cotacaoBase : string,
    dividendoYeild : string,
    rendimento : string
}

interface Administrador {
    razaoSocial : string,
    cnpj : string,
    email : string,
    telefone : string,
    site : string,
    nomeNoPregao : string,
    numeroDeCotas : string,
    patrimonio : string,
    segmento : string,
    tipoGestao : string,
    publicoAlvo : string,
}