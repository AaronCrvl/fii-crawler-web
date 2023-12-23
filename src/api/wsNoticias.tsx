import { iApi } from '../types/interfaces/iApi';
import { NoticiaType } from '../types/generic/NoticiaType';

export default class wsNoticia implements iApi {
  // Propriedades da Interface  --------------------------->
  caminhoEndpoint : string = "/v1/noticias"
  tipoDeRequisicaoPemitido : string[] = ['GET']
  necessitaAutorizacao : boolean =  false    

  // Endpoints de Notícias --------------------------->
  private noticiasJson : NoticiaType[] = [
    {
      titulo : 'BCFF11 acab de anunciar novos dividendos para Outubro; Veja o valor',
      descricao : 'O fundo imobiliário BCFF11 divulgou um novo pagamento de rendimentos para este mês de Outubro. veja o valor e a data de pagamento.',
      tempoPassado : "3 dias atrás",
      fonte : "FIIs",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtZ3JhdGlz/L2RpbmhlaXJvLW1v/ZWRhcy1icmFzaWxl/aXJhcy0xLXJlYWwt/Y2VkdWxhXzU4NzAy/LTYyMjcuanBnP3Np/emU9NjI2JmV4dD1q/cGc'
    },
    {
      titulo : 'BTG Pactual Fundo de Fundos (BCFF11) tem dividendo yeild de 9% ao ano e é FoF favorito de analista da Empiricus',
      descricao : 'Analista identifica no BCFF11 menor volatilidade dentre os principais FoFs da indpustria e desconto das cotas....',
      tempoPassado : '3 horas atrás',
      fonte : "Empiricus",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/sym1mqBT-L3VwbG9hZHMv/MjAyMS8xMS9EU0Nf/Mjc2OC5qcGc_Zml0/PTEyMzUsMTAyNCZx'
    },
    {
      titulo : 'BCFF11 e VISC11 caem pela 3° vez seguida, MXRF11 spbre e IFIx atinge menor patamar desde julho',
      descricao : 'Os FIIs BCFF11 e VISC11 caíram pela 3° vez seguida dentre outros. Veja destaques do dia.',
      tempoPassado : '5 meses atrás',
      fonte : "Suno",
      url: 'www.teste',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7:ce/aHR0cHM6Ly93d3cu/eT03MCZzdHJpcD1h/bGw'
    },
    {
      titulo : 'Noticias Sobre FII Dezembro de 2023',
      descricao : 'Veja destaques do dia.',
      tempoPassado : '3 meses atrás',
      fonte : "Suno",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7YYp7JcxVifpsjZ1jOEI6akIGVFT6UtUfgU/rs:fit:860:0:0/g:ce//cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
    },
    {
      titulo : 'Noticias Sobre FII',
      descricao : 'Noticias teste. Veja destaques do dia.',
      tempoPassado : '10 horas atrás',
      fonte : "Sunoooo",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7YYp7JcxVifpsjZ1jOEI6akIGVFT6UtUfgU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9HZXR0/eUltYWdlcy0xMjkw/OTA0NDEwLWxvdy5q/cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
    },
    {
      titulo : 'KNCF11 paga dividendos de Dezembro',
      descricao : 'O FII BCFF11 caíram pela 3° vez seguida dentre outros. Veja destaques do dia.',
      tempoPassado : '5 minutos atrás',
      fonte : "Suno",
      url: 'teste@fonte',
      urlImagem : 'https://imgs.search.brave.com:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9HZXR0/eUltYWdlcy0xMjkw/OTA0NDEwLWxvdy5q/cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
    },    
  ]
  
  public buscarNoticiasFundo(codigos : string[]) : Promise<Response> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          new Response (JSON.stringify(this.noticiasJson), {
            status:200,
            headers: {
              "Content-Type": "application/json; utf-8",
            }  
          })
        )
      }, 2000)
    })
  }
}