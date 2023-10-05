import { FIIDetalhadoType } from "../../interfaces/FiiDetalhadoType"

export default function LineChartVariacaoConfig(objeto : FIIDetalhadoType, largura? : string, altura? : string) {
    return {    
        cssProps : {
            width: largura === undefined ? '100vh' : largura, 
            height: altura === undefined ? '600px' : altura,            
        },
        option : {
            xAxis: {              
              data: objeto.historicoDividendos.map(dividendo => {
                return dividendo.dataBase
              })
            },
            yAxis: {
            //   type: 'value',
            //   data: objeto.historicoDividendos.map(dividendo => {
            //     return dividendo.rendimento
            //   }),              
            },
            series: [
                {
                    data : objeto.historicoDividendos.map(dividendo => {
                        return Number.parseFloat(dividendo.rendimento.replace(',', '.'))
                    }),
                    type : 'line',
                    stack : 'x',
                    lineStyle: {
                        normal: {
                          color: 'purple',
                          width: 4,                          
                        }   
                    },
                    label: {
                        show: true,
                        position: 'bottom',
                        textStyle: {
                          fontSize: 20
                        }
                    }            
                },
                {
                    data : objeto.historicoDividendos.map(dividendo => {
                        return Number.parseFloat(dividendo.dividendoYeild.replace(',', '.'))
                    }),
                    type : 'line',
                    stack : 'x',
                    lineStyle: {
                        normal: {
                          color: 'blue',
                          width: 4,                          
                        }
                    },
                    label: {
                        show: true,
                        position: 'bottom',
                        textStyle: {
                          fontSize: 20
                        }
                    }
                }                            
            ]                     
        },        
    }
}