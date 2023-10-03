import React, { CSSProperties } from "react";
import ReactEcharts from "echarts-for-react"; 

interface PieChartItem {
  value : number,
  name : string,
}

interface PieChartProps {
  cssProps : CSSProperties,
  option : {
    series: 
      {
        type: string,
        radius : string,
        data: Array<PieChartItem>,
      }[]
  }
}

export default function PieChart({option, cssProps} : PieChartProps) {         
  return <ReactEcharts option={option} style={cssProps} />;           
}