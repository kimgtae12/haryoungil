import Typograpy from "component/molecules/Typograpy";
import { ContentsArea } from "component/organisms/section/ContentsArea";
import { MapArea } from "component/organisms/section/MapArea";
import { DonationArea } from "component/organisms/section/v2/DonationArea";
import { GalleryArea } from "component/organisms/section/v2/GalleryArea";
import { IntroArea } from "component/organisms/section/v2/IntroArea";
import { Calendar } from "component/organisms/static/Calender";
import React from "react";
import { colors } from "theme/colors";
import { Box, FlexBox, Img } from "theme/globalStyle";

const SecMain = () => {
  const titleFontSize = { pc: 2.8, mobile: 2.4 };
  const subTitleFontSize = { pc: 2.4, mobile: 2 };
  const descriptionFontSize = { pc: 2, mobile: 1.6 };

  const shareKaKao = () => {
    window.Kakao.Share.sendCustom({
      templateId: 126413,
      templateArgs: {
        title: "하룡길♥강지은 결혼합니다.",
        description: "하룡길과 강지은의 결혼식을 축하해주세요.",
      },
    });
  };

  return (
    <FlexBox $isFullWidth $pb={3}>
      <IntroArea />
      <FlexBox $py={4} $px={2} $isFullWidth $ai={"center"} $gap={3.6}>
        <img
          src={require("assets/img/v2/ic_wedding.png")}
          style={{
            width: "5rem",
            height: "5rem",
          }}
          onClick={shareKaKao}
        />
        <FlexBox $flexDirection="row" $ai={"center"} $gap={1.6}>
          <Typograpy fontSize={subTitleFontSize}>하룡길</Typograpy>
          <Typograpy fontSize={subTitleFontSize} color={"#FFB6C1"}>
            ♥
          </Typograpy>
          <Typograpy fontSize={subTitleFontSize}>강지은</Typograpy>
        </FlexBox>
        {/* <FlexBox
          $py={1.2}
          $px={1.2}
          $btw={1}
          $bbw={1}
          $bbc={colors.DEFAULT_BORDER_COLOR}
          $btc={colors.DEFAULT_BORDER_COLOR}
        > */}
        <Typograpy fontWeight="Eulyoo-SemiBold" fontSize={descriptionFontSize}>
          결혼합니다.
        </Typograpy>
        {/* </FlexBox> */}
      </FlexBox>
      <FlexBox $isFullWidth>
        <Box $pa={2} $bgcolor={colors.GRAY} $isFullWidth>
          <Calendar />
        </Box>
        <Box $pa={2} $isFullWidth>
          <ContentsArea />
        </Box>
        <Box $pa={2} $bgcolor={colors.GRAY} $isFullWidth>
          <MapArea />
        </Box>
        <Box $pa={2} $isFullWidth>
          <GalleryArea />
        </Box>
        <Box $pa={2} $isFullWidth>
          <DonationArea />
        </Box>
      </FlexBox>
    </FlexBox>
  );
};

export default SecMain;
