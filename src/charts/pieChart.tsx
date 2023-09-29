import React from "react";
import ReactEcharts from "echarts-for-react"; 


interface PieChartItem {
    value : Number,
    name : string,
}

interface PieChartProps {
    option : {
        series: [
          {
            type: string,
            data:Array<PieChartItem>,
          }
        ]
    }
}

export default function PieChart({option} : PieChartProps) {       
    return <ReactEcharts option={option} />;           
}