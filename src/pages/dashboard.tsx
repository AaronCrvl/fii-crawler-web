import React from "react";
import BarChart from "../charts/barChart";
import FIIApi from "../api/fiiApi";
import { FIIType } from "../interfaces/FIIType";
import PieChart from "../charts/pieChart";

function Dashboard() {           

    // Hooks --------------------------->
    const [dadosFII, setDadosFII] = React.useState<FIIType[]>()

    React.useEffect(()=> {
        if(dadosFII === undefined) {
            new FIIApi().getFiiList().then((data) => {
                data.json().then( jsonData => {
                    let objeto = jsonData as FIIType[]
                    setDadosFII(objeto)
                    console.log(`Dados Recebidos: ${objeto}`)
                })                
            })
        }        
    }, dadosFII)

    // Chart Config --------------------------->
    const BarOption : typeof BarChart.prototype = {
        xAxis: {
            type: 'category',
            data: dadosFII?.map(fii => {return fii.nome})
        },
        yAxis: {
            type: 'value',                        
        },
        series: [
            {
                type: 'bar',
                data: dadosFII?.map(fii => {
                    return fii.ultimosRedimento == 'N/A' ? 
                    Number.parseFloat('0,00') : Number.parseFloat(fii.ultimosRedimento)
                })               
            }
        ]
    }

    const PieOption : typeof PieChart.prototype = {        
        series: [
            {
                type: 'pie',
                data: dadosFII?.map(fii => {
                    return {
                        name : fii.nome,
                        value : fii.cota == 'N/A' ? 
                        Number.parseFloat('0,00') : Number.parseFloat(fii.cota)
                    }
                })
            }
        ]        
    }

    // Jsx --------------------------->
    return (
        <div className="bg-sky-700 p-5 w-full h-screen">
            <div className="h-full p-8">                
                <div className="rounded-lg bg-white h-full p-1">                    
                    <p>DashBoard</p>
                    {dadosFII && <BarChart option={BarOption}/>}                    
                    {dadosFII && <PieChart option={PieOption}/>}                    
                </div>
            </div>
        </div>       
    )
}

export default Dashboard;