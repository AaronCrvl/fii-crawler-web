import React from 'react';

const dataJson = [
    {
      "nome": "AAGR11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "AAZQ11",
      "ultimoRedimentoRS": "0,12",
      "ultimosRedimento": "1,28",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,09",
      "patrimonio": "0,92",
      "cota": "9,63"
    },
    {
      "nome": "ABCP11",
      "ultimoRedimentoRS": "0,50",
      "ultimosRedimento": "0,70",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,52",
      "patrimonio": "0,73",
      "cota": "91,86"
    },
    {
      "nome": "AFCR11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "AFHI11",
      "ultimoRedimentoRS": "1,05",
      "ultimosRedimento": "1,07",
      "dataPagamento": "22/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "1,04",
      "patrimonio": "1,06",
      "cota": "95,95"
    },
    {
      "nome": "AFOF11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "AGRX11",
      "ultimoRedimentoRS": "0,14",
      "ultimosRedimento": "1,29",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,14",
      "patrimonio": "1,31",
      "cota": "10,12"
    },
    {
      "nome": "AIEC11",
      "ultimoRedimentoRS": "0,76",
      "ultimosRedimento": "1,11",
      "dataPagamento": "11/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,76",
      "patrimonio": "1,11",
      "cota": "94,70"
    },
    {
      "nome": "AJFI11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "ALMI11",
      "ultimoRedimentoRS": "0,37",
      "ultimosRedimento": "N/A",
      "dataPagamento": "13/04/2017",
      "dataBase": "31/03/2017",
      "rendimentoMedioAnual": "9,24",
      "patrimonio": "N/A",
      "cota": "2.250,09"
    },
    {
      "nome": "ALZC11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "ALZM11",
      "ultimoRedimentoRS": "0,80",
      "ultimosRedimento": "0,85",
      "dataPagamento": "22/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "0,91",
      "patrimonio": "0,97",
      "cota": "91,60"
    }
]

class FIIApi {
    getFiiList() : Promise<Response> {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(
                    new Response(JSON.stringify(dataJson), {
                        status: 200,
                        headers: {
                            "Content-Type": "application/json; utf-8",
                        },
                    })
                )
            }, 2000) // atraso de 2 segundos
        })
    }
}

export default FIIApi;