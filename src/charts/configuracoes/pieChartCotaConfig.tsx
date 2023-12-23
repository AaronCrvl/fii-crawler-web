import { FIIType } from "../../types/generic/FIIType"

export default function PieChartCotaConfig(lista : FIIType[], objeto? : FIIType, largura? : string, altura? : string) {
    return {    
        cssProps : {
            width: largura === undefined ? '800px' : largura, 
            height: altura === undefined ? '600px' : altura
        },
        option : {    
            series: [
                {
                    type: 'pie',
                    radius : '70%',                        
                    data: lista.sort((a : FIIType, b : FIIType) => {
                            return Number.parseFloat(a.cota) -  Number.parseFloat(b.cota)
                        }).map(fii => {
                            return {
                                value : Number.parseFloat(fii.cota.replace(',','.')),
                                name : `${fii.nome} - ${fii.cota}`
                            }                            
                        })
                        .slice(0,30)
                },
            ],
            roseType: 'area'       
        } 
    }
}