import Typograpy from "component/molecules/Typograpy";
import useDeviceType from "hook/useDeviceType";
import React from "react";
import { colors } from "theme/colors";
import { Box, FlexBox, Img } from "theme/globalStyle";

export const MapArea = () => {
  const deviceInfo = useDeviceType();

  const contentsFontSize = { pc: 2, mobile: 1.6 };

  const descriptionFontSize = { pc: 1.8, mobile: 1.4 };

  function callWaddingHole() {
    window.location.href = `tel:051-711-0177`;
  }

  return (
    <FlexBox
      $flex={1}
      $height={"100%"}
      $isFullWidth
      $jc={"space-around"}
      $gap={2}
      $ai={"center"}
    >
      <FlexBox
        $py={1.2}
        $px={1.2}
        // $btw={1}
        $bbw={1}
        $bbc={colors.DEFAULT_BORDER_COLOR}
        $btc={colors.DEFAULT_BORDER_COLOR}
      >
        <Typograpy
          color={"#ab8e6b"}
          fontWeight="Eulyoo-SemiBold"
          fontSize={contentsFontSize}
        >
          오시는 길
        </Typograpy>
      </FlexBox>
      <FlexBox $isFullWidth $ai={"center"} $gap={2}>
        <FlexBox $width={"100%"} $br={10} $overflow="hidden">
          <Img
            src={require("assets/img/wedding_map.png")}
            width={"100%"}
            style={{ width: "100%" }}
            height={"100%"}
            object_fit="contain"
          />
        </FlexBox>
        <FlexBox $gap={0.8} $ai={"center"}>
          <Typograpy fontSize={contentsFontSize}>
            2026년 2월 28일 토요일 오후 3시
          </Typograpy>
          <FlexBox
            $isFullWidth
            $flexDirection="row"
            $ai={"center"}
            $jc={"center"}
            $gap={0.8}
          >
            <Typograpy fontSize={contentsFontSize}>
              W스퀘어웨딩홀 3층 갤럭시홀
            </Typograpy>

            {/* <a href="https://naver.me/GOhT7G9Z">
              <Box $br={8} $overflow="hidden">
                <img
                  src={require("assets/img/ic_naver_map.png")}
                  width={18}
                  height={18}
                  style={{ objectFit: "contain" }}
                  // object_fit="contain"
                />
              </Box>
            </a> */}
          </FlexBox>
          <FlexBox
            $px={1.2}
            $py={0.8}
            $br={8}
            $bw={1}
            $bc={colors.DEFAULT_BORDER_COLOR}
            $flexDirection="row"
            $ai={"center"}
            $gap={0.8}
            onClick={callWaddingHole}
          >
            <img
              src={require("assets/img/v2/ic_call.png")}
              width={13}
              height={13}
              style={{ objectFit: "contain" }}
              // object_fit="contain"
            />
            <Typograpy fontSize={descriptionFontSize}>
              웨딩홀 전화하기
            </Typograpy>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox $isFullWidth $gap={1.2}>
        <Typograpy fontSize={descriptionFontSize} color={"#ab8e6b"}>
          네비게이션
        </Typograpy>
        <FlexBox $isFullWidth $gap={1.6}>
          <a href="https://tmap.life/6279870c" target={"_blank"}>
            <FlexBox $flexDirection={"row"} $ai={"center"} $gap={0.4}>
              <img
                src={require("assets/img/v2/map/ic_tmap.jpeg")}
                width={23}
                height={23}
                style={{ borderRadius: 8 }}
              />
              <Typograpy fontSize={descriptionFontSize}>티맵 열기</Typograpy>
            </FlexBox>
          </a>
          <a href="https://naver.me/GOhT7G9Z">
            <FlexBox $flexDirection={"row"} $ai={"center"} $gap={0.4}>
              <img
                src={require("assets/img/v2/map/ic_naver.png")}
                width={23}
                height={23}
                style={{
                  borderRadius: 8,
                }}
              />
              <Typograpy fontSize={descriptionFontSize}>
                네이버지도 열기
              </Typograpy>
            </FlexBox>
          </a>
          <a href="https://kko.kakao.com/45Qgf1t4m8">
            <FlexBox $flexDirection={"row"} $ai={"center"} $gap={0.4}>
              <img
                src={require("assets/img/v2/map/ic_kakao.png")}
                width={23}
                height={23}
                style={{
                  borderRadius: 8,
                }}
              />
              <Typograpy fontSize={descriptionFontSize}>
                카카오지도 열기
              </Typograpy>
            </FlexBox>
          </a>
        </FlexBox>
      </FlexBox>
      <FlexBox $isFullWidth $gap={0.8}>
        <Typograpy fontSize={descriptionFontSize} color={"#ab8e6b"}>
          지하철
        </Typograpy>
        <Typograpy fontSize={descriptionFontSize}>
          1호선, 2호선 서면역 9번출구 [셔틀운행]
        </Typograpy>
        <Typograpy fontSize={descriptionFontSize}>
          2호선 부암역 4번출구 [도보 10분 및 셔틀운행]
        </Typograpy>
      </FlexBox>
      <FlexBox $isFullWidth $gap={0.8}>
        <Typograpy fontSize={descriptionFontSize} color={"#ab8e6b"}>
          버스
        </Typograpy>
        <Typograpy fontSize={descriptionFontSize}>
          진구청 앞 하차 : 54,66,81,83-1,133,63
        </Typograpy>
        <Typograpy fontSize={descriptionFontSize}>
          [이마트 주차장 입구쪽으로 도보 5분]
        </Typograpy>
        <Typograpy fontSize={descriptionFontSize}>
          진양교차로 하차 : 17,23,44,129-1,138-1,141,160,167,169-1
        </Typograpy>
        <Typograpy fontSize={descriptionFontSize}>
          [부암로타리 방면 도보 5분]
        </Typograpy>
      </FlexBox>
      <FlexBox $isFullWidth $gap={0.8}>
        <Typograpy fontSize={descriptionFontSize} color={"#ab8e6b"}>
          셔틀 운행시간
        </Typograpy>
        <Typograpy fontSize={descriptionFontSize}>
          1시간 3회 운영 (20분 간격)
        </Typograpy>
      </FlexBox>
      <FlexBox
        $flexDirection="column"
        $ai={"center"}
        $bgcolor={colors.WHITE}
        $bw={1}
        $bc={colors.DEFAULT_BORDER_COLOR}
        $pa={{ pc: 2, mobile: 2 }}
        $br={8}
        $gap={0.8}
        $isFullWidth
      >
        <FlexBox $ai={"center"} $flex={1}>
          <Typograpy fontSize={descriptionFontSize}>W스퀘어 웨딩</Typograpy>
          <Typograpy fontSize={descriptionFontSize}>
            [셔틀버스 정류장]
          </Typograpy>
          <Typograpy fontSize={descriptionFontSize}>
            [정시 / 20분 / 40분]
          </Typograpy>
        </FlexBox>
        <img
          src={require("assets/img/v2/arrow_down.png")}
          width={20}
          height={20}
        />
        <FlexBox $ai={"center"}>
          <Typograpy fontSize={descriptionFontSize}>W스퀘어 웨딩</Typograpy>
          <Typograpy fontSize={descriptionFontSize}>
            [영광도서 맞은편 마을버스 정류장]
          </Typograpy>
          <Typograpy fontSize={descriptionFontSize}>
            [정시 / 20분 / 40분]
          </Typograpy>
        </FlexBox>
        <img
          src={require("assets/img/v2/arrow_down.png")}
          width={20}
          height={20}
        />
        <FlexBox $ai={"center"} $flex={1}>
          <Typograpy fontSize={descriptionFontSize}>W스퀘어 웨딩</Typograpy>
          <Typograpy fontSize={descriptionFontSize}>
            [20m앞 공중전화기]
          </Typograpy>
          <Typograpy fontSize={descriptionFontSize}>
            [정시 / 20분 / 40분]
          </Typograpy>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
