import React, { CSSProperties } from "react";
import ReactEcharts from "echarts-for-react";

interface Item 
{
    data: string[] | number[],
    type: string, // 'line',
    stack: string,
    lineStyle: {
        normal: {
          color: string,
          width: number,
          type?: string
        }
    },
    label: {
        show: boolean,
        position: string,
        textStyle: {
          fontSize: number
        }
    } 
  }

interface LineChartProps {
    cssProps : CSSProperties,
    option : {
        xAxis: {
          //type: string,
          data: string[],
        },
        yAxis: {
        //   type: string,
        //   data: string[],
        },
        series: Item[]                
      }
}

export default function LineChart({option, cssProps} : LineChartProps) {       
    return <ReactEcharts option={option} style={cssProps}/>;        
}