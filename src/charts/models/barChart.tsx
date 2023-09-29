import React, { CSSProperties } from "react";
import ReactEcharts from "echarts-for-react"; 

interface BarChartProps {
    cssProps : CSSProperties,
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

export default function BarChart({option, cssProps} : BarChartProps) {       
    return <ReactEcharts option={option} style={cssProps}/>;        
}