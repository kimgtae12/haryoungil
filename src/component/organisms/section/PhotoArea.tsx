import Typograpy from 'component/molecules/Typograpy';
import React from 'react';
import { Box, FlexBox } from 'theme/globalStyle';

export const PhotoArea = () => {

    return(
        <FlexBox
        $flex={2}
        $ai={"center"}
        $jc={"center"}
        $height={"100%"}
        $isFullWidth
        $gap={{ pc: 4, mobile: 2 }}
      >
        <FlexBox
          $width={"70%"}
          $height={"100%"}
          $pa={2}
          $br={5}
          $bgcolor={"#f6e9d8"}
          $ai={"center"}
          $gap={2}
          style={{
            rotate: "-3deg",
          }}
        >
          <Box
            $flex={1}
            $width={"100%"}
            $br={8}
            style={{
              backgroundImage: `url(${require("assets/img/main_card.jpg")})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <Typograpy fontSize={{ pc: 2.6, mobile: 2.4 }} color="#ab8e6b">
            Happy Wedding Day
          </Typograpy>
        </FlexBox>

        <FlexBox $width={"70%"} $ai={"flex-end"} $gap={1.6}>
          <FlexBox $flexDirection="row" $ai={"flex-start"} $gap={1.6}>
            <Typograpy fontSize={{ pc: 2.6, mobile: 2.4 }}>
              하룡길
            </Typograpy>
            <Typograpy fontSize={{ pc: 1.6, mobile: 1.4 }}>
              그리고
            </Typograpy>
            <Typograpy fontSize={{ pc: 2.6, mobile: 2.4 }}>
              강지은
            </Typograpy>
          </FlexBox>
          <Typograpy fontSize={{ pc: 1.8, mobile: 1.6 }}>
            겨울의 끝, 봄의 문턱에서 두 사람이 하나가 됩니다.
          </Typograpy>
        </FlexBox>
      </FlexBox>
    )

}