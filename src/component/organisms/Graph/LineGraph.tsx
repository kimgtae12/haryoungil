import Typograpy from 'component/molecules/Typograpy';
import React from 'react';
import { FlexBox } from 'theme/globalStyle';

interface LineGraphPropsType {
    columns : number[][],
    graphColor : string[],
    graphWidth? : number,
    graphHeight? : number,
}


export const LineGraph : React.FC<LineGraphPropsType> = ({
    columns,
    graphColor,
    graphWidth = 200,
    graphHeight = 200,
}) => {
    const offset = 10;
    //2차원 목록을 1차원으로 변환한다.
    const arr = columns.reduce((prev, next) => prev.concat(next))

    //그래프 최대값 (Y)
    const maxValue = Math.max(...arr);
    //그래프 최소값 (Y)
    const minValue = Math.min(...arr);

    const maxLenth = columns.reduce((prev, next) => (prev > next.length ? prev : next.length) , -1)
    const svgWidth = graphWidth * maxLenth;

    console.log(svgWidth);

    //범위 (스케일 백터 구하기용)
    const delta = maxValue - minValue;

    const polyLines = columns.map((column) => column.map((value,index) => {
        const point = {
            x : index + graphWidth + graphWidth/2,
            y : (value - minValue) * (graphHeight / delta) +offset
        }

        return point;
    }))
    return(
        <FlexBox>
            <Typograpy fontSize={2}>Line Graph</Typograpy>
            <svg 
                width={svgWidth} 
                height={graphHeight * offset * 2}
                viewBox={`0 0 ${svgWidth} ${graphHeight + offset * 2}`}
                style={{transform : `scaleY(-1)`}}
            >
                {polyLines.map((polyline , index) => {
                    const points = polyline.reduce((acc , point) => {
                        acc += `${point.x}, ${point.y}`;
                        return acc;
                    },'');
                    return(
                        <polyline 
                            stroke={graphColor[index]}
                            strokeWidth={2}
                            fill="none"
                            points={points}    
                        />
                    )
                })}
                {polyLines.map((polyline, index) =>
          polyline.map((dot, dotIndex) => (
            <circle
              key={dotIndex}
              r="2.5"
              cx={dot.x}
              cy={dot.y}
              stroke={graphColor[index]}
              strokeWidth="2"
              fill={"#fff"}
            ></circle>
          ))
        )}
            </svg>
        </FlexBox>
    )
}