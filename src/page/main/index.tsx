import Typograpy from "component/molecules/Typograpy";
import { PhotoArea } from "component/organisms/section/PhotoArea";
import { Calendar } from "component/organisms/static/Calender";
import useDeviceType from "hook/useDeviceType";
import React from "react";
import { colors } from "theme/colors";
import { Box, FlexBox, Img } from "theme/globalStyle";

import { Swiper, SwiperSlide } from "swiper/react";

import { InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import "swiper/css";

const MainPage = () => {
  const deviceInfo = useDeviceType();

  const controls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      //보여질때 설정
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // 각 자식 요소 사이의 지연 시간
      },
    },
  };

  const itemVariants = {
    //각 이미지 motion 설정
    hidden: { opacity: 0, y: 50 }, //초기엔 y위치가 50
    visible: {
      opacity: 1,
      y: 0, //보여지면 정위치로 이동
      transition: {
        duration: 0.5,
      },
    },
  };

  function photoInview(inview: boolean) {
    if (inview) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }

  return (
    <FlexBox
      $gap={2}
      $isFullWidth
      $minHeight={"100vh"}
      $bgcolor={colors.BACKGROUND_COLOR}
      $ai={"center"}
      $px={2}
    >
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SwiperSlide>
          <FlexBox
            $isFullWidth
            $height="100vh"
            $jc={"center"}
            style={{
              width: deviceInfo === "pc" ? "80%" : "100%",
            }}
          >
            <FlexBox
              $isFullWidth
              $height={deviceInfo === "mobile" ? "90vh" : "70vh"}
              $flexDirection={deviceInfo === "pc" ? "row" : "column"}
              $jc={"center"}
              $ai={"center"}
              $gap={{ pc: 1.2, mobile: 3 }}
            >
              <FlexBox
                $flex={deviceInfo === "pc" ? 1 : undefined}
                $ai={"center"}
                $isFullWidth
              >
                <Calendar />
              </FlexBox>
              {deviceInfo === "pc" && <PhotoArea />}
            </FlexBox>
          </FlexBox>
        </SwiperSlide>

        {deviceInfo === "mobile" && (
          <SwiperSlide>
            <FlexBox $isFullWidth $height="100vh" $jc={"center"}>
              <FlexBox
                $isFullWidth
                $height={deviceInfo === "mobile" ? "90vh" : "70vh"}
                $jc={"center"}
                $ai={"center"}
                $gap={{ pc: 1.2, mobile: 3 }}
              >
                <FlexBox
                  $flex={deviceInfo === "mobile" ? 3 : 2}
                  $ai={"center"}
                  $jc={"center"}
                  $height={"100%"}
                  $isFullWidth
                  $gap={5}
                >
                  <InView
                    as="div"
                    onChange={photoInview}
                    threshold={0.9} // 화면의 절반 이상 보일 때 inView
                    style={{
                      height: "100%",
                      flex: deviceInfo === "mobile" ? 3 : 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      gap: "5rem",
                      flexDirection: "column",
                    }}
                  >
                    <FlexBox
                      $width={deviceInfo === "mobile" ? "90%" : "70%"}
                      $height={"50%"}
                      $pa={2}
                      $br={5}
                      $bgcolor={"#f6e9d8"}
                      $ai={"center"}
                      $gap={2}
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
                      <Typograpy
                        fontSize={{ pc: 2.4, mobile: 1.8 }}
                        color="#ab8e6b"
                      >
                        Happy Wedding Day
                      </Typograpy>
                    </FlexBox>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate={controls}
                      style={{ width: "100%" }}
                    >
                      <FlexBox
                        $width={deviceInfo === "mobile" ? "90%" : "70%"}
                        $ai={"flex-end"}
                        $gap={2}
                      >
                        <motion.div variants={itemVariants}>
                          <FlexBox
                            $flexDirection="row"
                            $ai={"flex-start"}
                            $gap={1.6}
                          >
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
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <FlexBox $gap={0.8}>
                            <Typograpy fontSize={{ pc: 1.8, mobile: 1.6 }}>
                              {`겨울의 끝, 봄의 문턱에서`}
                            </Typograpy>
                            <Typograpy fontSize={{ pc: 1.8, mobile: 1.6 }}>
                              {`두 사람이 하나가 됩니다.`}
                            </Typograpy>
                          </FlexBox>
                        </motion.div>
                      </FlexBox>
                    </motion.div>
                  </InView>
                </FlexBox>
              </FlexBox>
            </FlexBox>
          </SwiperSlide>
        )}
      </Swiper>
    </FlexBox>
  );
};

export default MainPage;
