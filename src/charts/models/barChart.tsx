import React, { CSSProperties } from "react";
import ReactEcharts from "echarts-for-react";

interface BarChartProps {
    cssProps : CSSProperties,
    option : {
        xAxis : {
            type : string,
            data : string[] | number[]
        },
        yAxis: {
            type: string,
            data : string[] | number[],
        },
        series: 
            {
                data: {
                    value : string | number,
                    itemStyle : {
                        color : string,
                        shadowColor : string,
                        opacity : number,
                    }
                }[],
                type: string,
                showBackground : Boolean,
                backgroundStyle : {
                    color : string
                },
                barWidth : string,
            }[]        
    }
}

export default function BarChart({option, cssProps} : BarChartProps) {       
    return <ReactEcharts option={option} style={cssProps}/>;        
}