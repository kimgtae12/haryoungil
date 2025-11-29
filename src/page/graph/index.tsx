import Typograpy from 'component/molecules/Typograpy';
import { BarCharts } from 'component/organisms/Graph/BarChats';
import { DounutGraph } from 'component/organisms/Graph/DounutGraph';
import { LineGraph } from 'component/organisms/Graph/LineGraph';
import React from 'react';
import { Box, FlexBox } from 'theme/globalStyle';

const MainPage = () => {

    return(
        <FlexBox $gap={2}>
            {/* <DounutGraph 
                size={200}
                per={45}
            />
            <BarCharts 
                dataList={[
                    {label : '1번',
                    value : 10,
                    barColor : '#06f',},
                    {label : '2번',
                    value : 30,
                    barColor : 'red',},
                    {label : '3번',
                    value : 80,
                    barColor : 'orange',},
                    {label : '4번',
                    value : 20,
                    barColor : 'gray',}
                ]}
                chartSize={25}
                type={'horizontal'}
            />

<BarCharts 
                dataList={[
                    {label : '1번',
                    value : 10,
                    barColor : '#06f',},
                    {label : '2번',
                    value : 30,
                    barColor : 'red',},
                    {label : '3번',
                    value : 80,
                    barColor : 'orange',},
                    {label : '4번',
                    value : 20,
                    barColor : 'gray',}
                ]}
                chartSize={25}
                type={'vertical'}
            /> */}
        </FlexBox>
    )

}

export default MainPage;