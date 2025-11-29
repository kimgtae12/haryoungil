import Typograpy from 'component/molecules/Typograpy';
import React from 'react';
import { Box, FlexBox } from 'theme/globalStyle';

interface BarChartsPropsType {
    dataList : {label : string, value :number, barColor : string}[],
    chartSize? : number,
    type? : 'vertical' | 'horizontal'
}

export const BarCharts : React.FC<BarChartsPropsType> = ({
    chartSize = 20,
    dataList,
    type = 'vertical',
}) => {
    
    const [barChartInfo, setBarChartInfo] = React.useState<{
        max : number,
        min : number,
        barInfo : {label : string, height : number, barColor:string}[],
    }>({
        max : 0,
        min : 0,
        barInfo : [],
    })
    const [isMount, setIsMount] = React.useState(false);

    function chartDataMapping(){
        const valueList = dataList.map( item => item.value);
        const maxValue = Math.max(...valueList);
        const minValue = Math.min(...valueList);

        // 1. 상단 여백 비율 설정 (예: 10%의 여백)
        const bufferRatio = 0.1; 

        // 2. 가중값(버퍼)이 적용된 새로운 최대값 계산
        // 예시: maxValue가 100일 경우, scaledMaxValue는 100 * 1.1 = 110이 됩니다.
        const scaledMaxValue = maxValue * (1 + bufferRatio);

        const sumValue = valueList.reduce((acc , cur) => acc + cur , 0);
        
        let tempChartInfo : {
            max : number,
            min : number,
            barInfo : {label : string, height : number, barColor:string}[],
        } = {
            max : scaledMaxValue,
            min : minValue,
            barInfo : [],
        }


        valueList.map((item,index) => {
            const barHeight = Math.round((item / scaledMaxValue) * 100);

            tempChartInfo.barInfo.push({
                label:dataList[index].label,
                height : barHeight,
                barColor : dataList[index].barColor,
            })

        })

        setBarChartInfo({...tempChartInfo});
        setTimeout(()=>{
            setIsMount(true);
        },50)
    }

    React.useEffect(()=>{
        chartDataMapping();
    },[])
    if(type === 'horizontal'){
        return(
        <FlexBox $width={chartSize} $height={chartSize} $ml={2}>
            <Typograpy fontSize={2}>Horizontal Bar Charts</Typograpy>
            <FlexBox $isFullWidth $height={'100%'} $flexDirection='row' $mt={1.2}>
            <FlexBox $gap={2} $height={'100%'}>
            {barChartInfo.barInfo.map((item,index) => {
                    return(
                        <FlexBox key={'xAxis'+index} $gap={0.8} $flex={1} $height={'100%'} $jc={'center'}>
                            <Box $width={4}>
                                <Typograpy fontSize={1.4}>{item.label}</Typograpy>
                            </Box>
                        </FlexBox>
                    )
                })}
                </FlexBox>
                <FlexBox $blw={1} $bbw={1} $bbc={'#e2e2e2'} $blc={'#e2e2e2'} $gap={2} $height={'100%'} $width={'100%'}>
                {barChartInfo.barInfo.map((item,index) => {
                    return(
                        <FlexBox $isFullWidth $gap={0.8} $flex={1} $height={'100%'} $jc={'center'}>
                        <Box 
                            $width={isMount ? `${item.height}%` : '0%'}
                            $height={4}
                            $bgcolor={item.barColor}
                            key={'bar'+index}
                            style={{
                                transition:'width 0.8s'
                            }}
                            $btrr={5}
                            $bbrr={5}
                        />
                        </FlexBox>
                    )
                })}
                </FlexBox>
            </FlexBox>
        </FlexBox>
        )
    }
    else{

    return(
        <FlexBox $width={chartSize} $height={chartSize} $ml={2}>
            <Typograpy fontSize={2}>Bar Charts</Typograpy>
            <FlexBox $isFullWidth $height={'100%'} $mt={2}>
            <FlexBox $blw={1} $blc={'#e2e2e2'} $flexDirection='row' $gap={2} $height={'100%'} $width={'100%'}>
                {barChartInfo.barInfo.map((item,index) => {
                    return(
                        <FlexBox $gap={0.8} $flex={1} $height={'100%'} $ai={'center'} $jc={'flex-end'}>
                        <Box 
                            $width={4}
                            $height={isMount ? `${item.height}%` : '0%'}
                            $bgcolor={item.barColor}
                            key={'bar'+index}
                            style={{
                                transition:'height 0.8s'
                            }}
                            $btrr={5}
                            $btlr={5}
                        />
                        </FlexBox>
                    )
                })}
            </FlexBox>
            <Box $width={'100%'} $height={0.1} $bgcolor={'#e2e2e2'} />
            <FlexBox $isFullWidth $gap={2} $flexDirection='row' $mt={0.8}>
            {barChartInfo.barInfo.map((item,index) => {
                    return(
                        <FlexBox key={'xAxis'+index} $gap={0.8} $flex={1} $height={'100%'} $ai={'center'}>
                            <Box $width={4}>
                                <Typograpy fontSize={1.4}>{item.label}</Typograpy>
                            </Box>
                        </FlexBox>
                    )
                })}
                </FlexBox>
            </FlexBox>
        </FlexBox>
    )
}
}