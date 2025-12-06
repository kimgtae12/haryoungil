import React from "react";
import { Box, FlexBox } from "theme/globalStyle";
import Typograpy from "../../molecules/Typograpy";
import { colors } from "theme/colors";
import useDeviceType from "hook/useDeviceType";

export const Calendar = () => {
  const deviceInfo = useDeviceType();
  const weeks = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
  ];
  const contentsFontSize = { pc: 2, mobile: 1.6 };

  const getColor = (dayIndex: number, date: number) => {
    if (dayIndex === 0) return colors.SUNDAY_COLOR; // Sunday
    if (dayIndex === 6) return colors.SATURDAY_COLOR; // Saturday
    return undefined;
  };

  const isBold = (date: number) => {
    if (date === 28) return "Eulyoo-SemiBold";
    return undefined;
  };

  return (
    <FlexBox $isFullWidth $ai="center" $gap={2}>
      {/* 헤더 */}
      <FlexBox $isFullWidth $gap={1.2} $ai="center">
        <FlexBox
          $py={1.2}
          $px={1.2}
          // $btw={1}
          $bbw={1}
          $bbc={colors.DEFAULT_BORDER_COLOR}
          $btc={colors.DEFAULT_BORDER_COLOR}
        >
          <Typograpy
            fontWeight="Eulyoo-SemiBold"
            fontSize={contentsFontSize}
            color="#ab8e6b"
          >
            Wedding Day
          </Typograpy>
        </FlexBox>
        <Typograpy
          fontSize={{ pc: 2.8, mobile: 2.6 }}
          fontWeight="Eulyoo-SemiBold"
        >
          02
        </Typograpy>
      </FlexBox>

      {/* 요일 */}
      <FlexBox $isFullWidth>
        <FlexBox
          $flexDirection="row"
          $ai="center"
          $isFullWidth
          $jc="space-between"
        >
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <Box key={i} $flex={1}>
              <Typograpy
                fontSize={{ pc: 1.8, mobile: 1.6 }}
                color={
                  i === 0
                    ? colors.SUNDAY_COLOR
                    : i === 6
                    ? colors.SATURDAY_COLOR
                    : undefined
                }
              >
                {d}
              </Typograpy>
            </Box>
          ))}
        </FlexBox>
        <FlexBox $isFullWidth $mt={0.4}>
          {/* 날짜 */}
          {weeks.map((week, rowIndex) => (
            <FlexBox
              key={rowIndex}
              $flexDirection="row"
              $ai="center"
              $isFullWidth
              $jc="space-between"
            >
              {week.map((date, dayIndex) => (
                <FlexBox key={date} $flex={1} $ai={"center"}>
                  <FlexBox
                    $jc={"center"}
                    $ai={"center"}
                    $width={4}
                    $height={4}
                    $bw={date === 28 ? 2 : undefined}
                    $br={100}
                    $bc={"#C3DAA2"}
                  >
                    <Typograpy
                      fontSize={{ pc: 1.8, mobile: 1.6 }}
                      color={getColor(dayIndex, date)}
                      fontWeight={isBold(date)}
                    >
                      {date}
                    </Typograpy>
                  </FlexBox>
                </FlexBox>
              ))}
            </FlexBox>
          ))}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
