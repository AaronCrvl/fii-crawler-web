import { iApi } from '../types/interfaces/iApi';
import { UsuarioType } from '../types/generic/UsuarioType';

export default class wsUsuario implements iApi {
  // Propriedades da Interface --------------------------->
  caminhoEndpoint : string = "fii"
  tipoDeRequisicaoPemitido : string[] = ['GET', 'POST', 'PUT', 'DELETE']
  necessitaAutorizacao : boolean =  true     

  // Endpoints do Usuário --------------------------->
  public relizarLogin(email : string, senha : string) : Promise<Response> {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if(email == 'teste@gmail.com'){
          resolve(
            new Response(JSON.stringify(''), {
              status: 200, // Ok
              headers: {
                  "Content-Type": "application/json; utf-8",
              },
            })
          )
        }
        else {
          resolve(
            new Response(null, {
              status: 500, // Ok
              headers: {
                  "Content-Type": "application/json; utf-8",
              },
            })
          )
        }
      }, 2000) // simular atraso de 2 segundos
    })
  }   
  
  public criarUsario(usuario : UsuarioType) : Promise<Response> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          new Response (JSON.stringify('Usuario criado!'), {
            status:200,
            headers: {
              "Content-Type": "application/json; utf-8",
            }  
          })
        )
      }, 3000)
    })
  }
}