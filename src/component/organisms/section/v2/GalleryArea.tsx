import Typograpy from "component/molecules/Typograpy";
import { GalleryMdoal } from "component/organisms/modal/GalleryMomdal";
import React from "react";
import { colors } from "theme/colors";
import { FlexBox, GridBox, Img } from "theme/globalStyle";

export const GalleryArea = () => {
  const contentsFontSize = { pc: 2, mobile: 1.6 };

  const imgList = Array.from({ length: 16 });

  const [galModalInfo, setGalModalInfo] = React.useState<{
    visible: boolean;
    pickImg: number;
  }>({
    visible: false,
    pickImg: 0,
  });

  function galleryModalOnHandler(pickImgId: number) {
    setGalModalInfo({
      visible: true,
      pickImg: pickImgId,
    });
  }

  function pickImgIdHandler(pickImgId: number) {
    setGalModalInfo((prev) => ({
      ...prev,
      pickImg: pickImgId,
    }));
  }

  function galleryModalOff() {
    setGalModalInfo({
      visible: false,
      pickImg: 0,
    });
  }

  React.useEffect(() => {
    console.log(imgList);
  }, []);

  React.useEffect(() => {
    if (galModalInfo.visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [galModalInfo.visible]);

  return (
    <FlexBox
      $flex={1}
      $height={"100%"}
      $isFullWidth
      $jc={"space-around"}
      $gap={2}
      $ai={"center"}
    >
      {galModalInfo.pickImg ? (
        <GalleryMdoal
          visible={galModalInfo.visible}
          modalOff={galleryModalOff}
          pickImgHandler={pickImgIdHandler}
          pickImgId={galModalInfo.pickImg}
        />
      ) : (
        <></>
      )}
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
          갤러리
        </Typograpy>
      </FlexBox>
      <GridBox $gridTemplateColumns="repeat(4,1fr)" $gap={0.8}>
        {imgList.map((_, index) => {
          return (
            <FlexBox
              $isFullWidth
              $height={"100%"}
              $jc={"center"}
              $ai={"center"}
              onClick={() => {
                galleryModalOnHandler(index + 1);
              }}
            >
              <Img
                src={require(`assets/img/v2/gallery/gallery${index + 1}.jpg`)}
                width={"100%"}
                height={"100%"}
                object_fit="cover"
                style={{
                  pointerEvents: "none",
                }}
              />
            </FlexBox>
          );
        })}
      </GridBox>
    </FlexBox>
  );
};
