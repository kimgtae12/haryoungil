import Typograpy from "component/molecules/Typograpy";
import React from "react";
import Modal from "react-modal";
import { Box, FlexBox, Img } from "theme/globalStyle";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import { Thumbs } from "swiper/modules";
interface GalleryModalPropsType {
  visible: boolean;
  modalOff: () => void;
  pickImgId: number;
  pickImgHandler: (imgId: number) => void;
}

export const GalleryMdoal: React.FC<GalleryModalPropsType> = ({
  visible,
  pickImgId,
  modalOff,
  pickImgHandler,
}) => {
  const imgList = Array.from({ length: 16 });
  const [swiper, setSwiper] = React.useState<SwiperCore>();
  const [miniSwiper, setMiniSwiper] = React.useState<SwiperCore>();

  function swiperIndexHandler(index: number) {
    swiper?.slideTo(index);
  }

  return (
    <Modal
      isOpen={visible}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.0)",
        },
        content: {
          width: "100%",
          inset: 0,
          borderRadius: 0,
          backgroundColor: "rgba(0,0,0,0.9)",
          padding: 0,
        },
      }}
    >
      <FlexBox
        $isFullWidth
        $height={"100%"}
        $jc={"space-between"}
        $ai={"center"}
      >
        <FlexBox
          $flexDirection="row"
          $isFullWidth
          $jc={"flex-end"}
          $pt={2}
          $px={2}
        >
          <img
            src={require("assets/img/v2/ic_close.png")}
            width={50}
            height={50}
            onClick={() => {
              modalOff();
            }}
          />
        </FlexBox>
        {pickImgId && (
          <Swiper
            onActiveIndexChange={(swiperCore: SwiperCore) => {
              swiper?.slideTo(swiperCore.activeIndex);
              pickImgHandler(swiperCore.activeIndex + 1);
            }}
            initialSlide={pickImgId - 1}
            thumbs={{ swiper: swiper }}
            slidesPerView={1}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            speed={1000}
            style={{
              width: "100%",
            }}
            spaceBetween={20}
            modules={[Thumbs]}
          >
            {imgList.map((_, index) => {
              return (
                <SwiperSlide>
                  <FlexBox $width={"80%"}>
                    <Img
                      src={require(`assets/img/v2/gallery/gallery${
                        index + 1
                      }.jpg`)}
                      width={"100%"}
                      height={"100%"}
                      object_fit="cover"
                    />
                  </FlexBox>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
        {pickImgId && (
          <Swiper
            onSwiper={setSwiper}
            initialSlide={pickImgId - 1}
            slidesPerView={4}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            speed={1000}
            style={{
              width: "100%",
              padding: "1.2rem",
            }}
            spaceBetween={20}
            watchSlidesProgress
          >
            {imgList.map((_, index) => {
              return (
                <SwiperSlide>
                  <FlexBox
                    $width={8}
                    $height={8}
                    onClick={() => {
                      swiperIndexHandler(index);
                      pickImgHandler(index + 1);
                    }}
                  >
                    <Img
                      src={require(`assets/img/v2/gallery/gallery${
                        index + 1
                      }.jpg`)}
                      width={"100%"}
                      height={"100%"}
                      object_fit="cover"
                    />
                    {pickImgId !== index + 1 && (
                      <Box
                        $position={"absolute"}
                        top={0}
                        $left={0}
                        $width={"100%"}
                        $height={"100%"}
                        $bgcolor={"rgba(0,0,0,0.6)"}
                        style={{
                          zIndex: 3,
                        }}
                      />
                    )}
                  </FlexBox>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </FlexBox>
    </Modal>
  );
};
