import { iApi } from '../types/interfaces/iApi';
import { NoticiaType } from '../types/generic/NoticiaType';

export default class wsNoticia implements iApi {
  // Propriedades da Interface  --------------------------->
  caminhoEndpoint : string = "/v1/fii"
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
      urlImagem : 'https://imgs.search.brave.com/_u2wWGvRZMGQuQHS4u_g1RAYY6VwWzeoSQ7iQlPvgtQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtZ3JhdGlz/L2RpbmhlaXJvLW1v/ZWRhcy1icmFzaWxl/aXJhcy0xLXJlYWwt/Y2VkdWxhXzU4NzAy/LTYyMjcuanBnP3Np/emU9NjI2JmV4dD1q/cGc'
    },
    {
      titulo : 'BTG Pactual Fundo de Fundos (BCFF11) tem dividendo yeild de 9% ao ano e é FoF favorito de analista da Empiricus',
      descricao : 'Analista identifica no BCFF11 menor volatilidade dentre os principais FoFs da indpustria e desconto das cotas....',
      tempoPassado : '3 horas atrás',
      fonte : "Empiricus",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/sym1mqBT-e4ESz8ZI1NrpE0jZIe7h7i8kmuK8ZrfKQA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMS9EU0Nf/Mjc2OC5qcGc_Zml0/PTEyMzUsMTAyNCZx/dWFsaXR5PTcwJnN0/cmlwPWFsbA'
    },
    {
      titulo : 'BCFF11 e VISC11 caem pela 3° vez seguida, MXRF11 spbre e IFIx atinge menor patamar desde julho',
      descricao : 'Os FIIs BCFF11 e VISC11 caíram pela 3° vez seguida dentre outros. Veja destaques do dia.',
      tempoPassado : '5 meses atrás',
      fonte : "Suno",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7YYp7JcxVifpsjZ1jOEI6akIGVFT6UtUfgU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9HZXR0/eUltYWdlcy0xMjkw/OTA0NDEwLWxvdy5q/cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
    },
    {
      titulo : 'Noticias Sobre FII Qualquer Para Teste de DTO',
      descricao : 'Os FIIs BCFF11 e VISC11 caíram pela 3° vez seguida dentre outros. Veja destaques do dia.',
      tempoPassado : '5 meses atrás',
      fonte : "Suno",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7YYp7JcxVifpsjZ1jOEI6akIGVFT6UtUfgU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9HZXR0/eUltYWdlcy0xMjkw/OTA0NDEwLWxvdy5q/cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
    },
    {
      titulo : 'Noticias Sobre FII Qualquer Para Teste de DTO',
      descricao : 'Os FIIs BCFF11 e VISC11 caíram pela 3° vez seguida dentre outros. Veja destaques do dia.',
      tempoPassado : '5 horas atrás',
      fonte : "Suno",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7YYp7JcxVifpsjZ1jOEI6akIGVFT6UtUfgU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9HZXR0/eUltYWdlcy0xMjkw/OTA0NDEwLWxvdy5q/cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
    },
    {
      titulo : 'Noticias Sobre FII Qualquer Para Teste de DTO',
      descricao : 'Os FIIs BCFF11 e VISC11 caíram pela 3° vez seguida dentre outros. Veja destaques do dia.',
      tempoPassado : '5 minutos atrás',
      fonte : "Suno",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7YYp7JcxVifpsjZ1jOEI6akIGVFT6UtUfgU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9HZXR0/eUltYWdlcy0xMjkw/OTA0NDEwLWxvdy5q/cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
    },
    {
      titulo : 'Noticias Sobre FII Qualquer Para Teste de DTO',
      descricao : 'Os FIIs BCFF11 e VISC11 caíram pela 3° vez seguida dentre outros. Veja destaques do dia.',
      tempoPassado : '5 horas atrás',
      fonte : "Suno",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7YYp7JcxVifpsjZ1jOEI6akIGVFT6UtUfgU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9HZXR0/eUltYWdlcy0xMjkw/OTA0NDEwLWxvdy5q/cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
    },
    {
      titulo : 'Noticias Sobre FII Qualquer Para Teste de DTO',
      descricao : 'Os FIIs BCFF11 e VISC11 caíram pela 3° vez seguida dentre outros. Veja destaques do dia.',
      tempoPassado : '5 segundos atrás',
      fonte : "Suno",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7YYp7JcxVifpsjZ1jOEI6akIGVFT6UtUfgU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9HZXR0/eUltYWdlcy0xMjkw/OTA0NDEwLWxvdy5q/cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
    },

    {
      titulo : 'Noticias Sobre FII Qualquer Para Teste de DTO',
      descricao : 'Os FIIs BCFF11 e VISC11 caíram pela 3° vez seguida dentre outros. Veja destaques do dia.',
      tempoPassado : '5 horas atrás',
      fonte : "Suno",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7YYp7JcxVifpsjZ1jOEI6akIGVFT6UtUfgU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9HZXR0/eUltYWdlcy0xMjkw/OTA0NDEwLWxvdy5q/cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
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
      }, 1000)
    })
  }
}