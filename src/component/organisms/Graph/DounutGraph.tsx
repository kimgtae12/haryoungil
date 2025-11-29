import Typograpy from 'component/molecules/Typograpy';
import React from 'react';
import { FlexBox } from 'theme/globalStyle';


interface DounutGraphPropsType {
    size : number,
    strokeWidth? : number,
    strokeColor? : string,
    per : number,
}
export const DounutGraph : React.FC<DounutGraphPropsType> = ({
    size,
    strokeWidth = 10,
    strokeColor = '#06f',
    per,
}) => {

        //원 중심 좌표
        const centerXY = size / 2; 
        //반지름
        const r = centerXY - strokeWidth/2;
        //원 둘레
        const c = 2 * Math.PI * r;
        //선택된 영역 만큼의 원둘레
        const cArea = c - (per/100)*c;

    return(
        <FlexBox>
            <Typograpy fontSize={2}>Dounut Graph</Typograpy>
            <svg
                width={size}
                height={size}
            >
                <g  rotate={'-90deg'} origin={`${centerXY},${centerXY}`}>
                    <circle cx={centerXY} cy={centerXY} r={r} stroke="gray" strokeWidth={strokeWidth} fill="none" />
                    <circle  strokeLinecap='round' strokeDasharray={c} strokeDashoffset={cArea} cx={centerXY} cy={centerXY} r={r} stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
                </g>
            </svg>
        </FlexBox>
    )
}