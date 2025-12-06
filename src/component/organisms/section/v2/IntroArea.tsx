import Typograpy from "component/molecules/Typograpy";
import { useAnimation, motion } from "framer-motion";
import React from "react";
import { colors } from "theme/colors";
import { Box, FlexBox, Img } from "theme/globalStyle";
export const IntroArea = () => {
  const titleFontSize = { pc: 2.8, mobile: 2.4 };
  const subTitleFontSize = { pc: 2.4, mobile: 2 };

  const controls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      //보여질때 설정
      opacity: 1,
      transition: {
        staggerChildren: 1, // 각 자식 요소 사이의 지연 시간
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
        duration: 1,
      },
    },
  };

  React.useEffect(() => {
    if (controls) controls.start("visible");
  }, [controls]);

  return (
    <FlexBox $isFullWidth className={"full-height"}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        style={{ width: "100%", height: "100%" }}
      >
        <motion.div
          variants={itemVariants}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            // backgroundImage: `url(${require("assets/img/v2/main_intro.jpg")})`,
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
          }}
        >
          <Img
            src={require("assets/img/v2/main_intro.jpg")}
            width={"100%"}
            height={"100%"}
            object_fit="cover"
          />
          <Box
            $width={"100%"}
            $height={"100%"}
            $position="absolute"
            $bgcolor={"rgba(0,0,0,0.3)"}
            style={{
              top: 0,
              left: 0,
            }}
          ></Box>
        </motion.div>
        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FlexBox
            $pa={1.2}
            // $bgcolor={"rgba(255,255,255,0.4)"}
            $gap={1.2}
            $ai={"center"}
            $mt={30}
          >
            <Typograpy fontSize={titleFontSize} color={colors.WHITE}>
              Happy Wedding Day
            </Typograpy>
            <Typograpy fontSize={subTitleFontSize} color={colors.WHITE}>
              2026.02.28 03:00 PM
            </Typograpy>
          </FlexBox>
        </motion.div>
      </motion.div>
    </FlexBox>
  );
};
