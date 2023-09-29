import React from "react";
import ReactEcharts from "echarts-for-react"; 

interface BarChartProps {
    option : {
        xAxis : {
            type : string,
            data : Array<string>
        },
        yAxis: {
            type: string,
        },
        series: [
            {
                data: Array<Number>,
                type: string,
            }
        ]
    }
}

export default function BarChart({option} : BarChartProps) {       
    return <ReactEcharts option={option} />;        
}