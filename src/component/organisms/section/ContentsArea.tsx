import Typograpy from "component/molecules/Typograpy";
import { useAnimation, motion } from "framer-motion";
import React from "react";
import { InView } from "react-intersection-observer";
import { colors } from "theme/colors";
import { Box, FlexBox } from "theme/globalStyle";

export const ContentsArea = () => {
  const controls = useAnimation();

  const contentsFontSize = { pc: 2, mobile: 1.6 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      //보여질때 설정
      opacity: 1,
      transition: {
        staggerChildren: 0.6, // 각 자식 요소 사이의 지연 시간
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
        duration: 0.9,
      },
    },
  };

  function photoInview(inview: boolean) {
    if (inview) {
      controls.start("visible");
    }
  }
  return (
    <InView
      as="div"
      onChange={photoInview}
      threshold={0.2} // 화면의 절반 이상 보일 때 inView
      style={{ width: "100%", height: "100%" }}
    >
      <FlexBox
        $isFullWidth
        $height={"100%"}
        $jc={"center"}
        $gap={{ pc: 6, mobile: 3 }}
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
            모시는 글
          </Typograpy>
        </FlexBox>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          style={{ width: "100%" }}
        >
          <FlexBox $isFullWidth $gap={2.8} $ai={"center"}>
            <motion.div variants={itemVariants}>
              <FlexBox $gap={0.4} $ai={"center"}>
                <Typograpy fontSize={contentsFontSize}>
                  계절의 경계에서
                </Typograpy>
                <Typograpy fontSize={contentsFontSize}>
                  두 사람의 이야기가 시작됩니다.
                </Typograpy>
              </FlexBox>
            </motion.div>
            <motion.div variants={itemVariants}>
              <FlexBox $gap={0.4} $ai={"center"}>
                <Typograpy fontSize={contentsFontSize}>
                  모든 순간을 아름답게 만들어가고
                </Typograpy>
                <Typograpy fontSize={contentsFontSize}>
                  이끌어주고, 응원해 주는
                </Typograpy>
                <Typograpy fontSize={contentsFontSize}>
                  서로가 되겠습니다.
                </Typograpy>
              </FlexBox>
            </motion.div>
            <motion.div variants={itemVariants}>
              <FlexBox $gap={0.4} $ai={"center"}>
                <Typograpy fontSize={contentsFontSize}>
                  새로 시작하는 이 자리에
                </Typograpy>
                <Typograpy fontSize={contentsFontSize}>
                  함께해 주시기 바랍니다.
                </Typograpy>
              </FlexBox>
            </motion.div>
          </FlexBox>
        </motion.div>
        <FlexBox $gap={0.8}>
          <FlexBox
            $flexDirection="row"
            $ai={"flex-end"}
            $gap={1.2}
            $isFullWidth
          >
            <Typograpy fontWeight="Eulyoo-SemiBold" fontSize={contentsFontSize}>
              하주형 · 신희숙
            </Typograpy>
            <Box $width={4}>
              <Typograpy fontSize={{ pc: 1.4, mobile: 1.2 }}>의 아들</Typograpy>
            </Box>
            <Typograpy
              fontWeight="Eulyoo-SemiBold"
              fontSize={contentsFontSize}
              color={"#ab8e6b"}
            >
              신랑 하룡길
            </Typograpy>
          </FlexBox>
          <FlexBox
            $flexDirection="row"
            $ai={"flex-end"}
            $gap={1.2}
            $isFullWidth
          >
            <Typograpy fontWeight="Eulyoo-SemiBold" fontSize={contentsFontSize}>
              강호춘 · 이미정
            </Typograpy>
            <FlexBox $width={4}>
              <Typograpy fontSize={{ pc: 1.4, mobile: 1.2 }}>의 딸</Typograpy>
            </FlexBox>
            <Typograpy
              fontWeight="Eulyoo-SemiBold"
              fontSize={contentsFontSize}
              color={"#ab8e6b"}
            >
              신부 강지은
            </Typograpy>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </InView>
  );
};
