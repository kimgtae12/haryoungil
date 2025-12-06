import Typograpy from "component/molecules/Typograpy";
import React from "react";
import { colors } from "theme/colors";
import { FlexBox } from "theme/globalStyle";

interface DonationInfoCardPropsType {
  name: string;
  bankName: string;
  bankNumber: string;
}

export const DonationInfoCard: React.FC<DonationInfoCardPropsType> = ({
  name,
  bankName,
  bankNumber,
}) => {
  const contentsFontSize = { pc: 2, mobile: 1.6 };
  const descriptionFontSize = { pc: 1.8, mobile: 1.4 };
  const littleDescriptionFontSize = { pc: 1.6, mobile: 1.2 };

  function copyBankInfo(bankInfo: string) {
    navigator.clipboard
      .writeText(bankInfo)
      .then(() => {
        alert("계좌번호가 성공적으로 복사되었습니다.");
      })
      .catch((err) => {
        alert("계좌번호 복사에 실패하였습니다.");
      });
  }
  return (
    <FlexBox $isFullWidth $gap={0.8}>
      <Typograpy fontSize={contentsFontSize}>{name}</Typograpy>
      <FlexBox
        $bw={1}
        $bc={colors.DEFAULT_BORDER_COLOR}
        $isFullWidth
        $flexDirection="row"
        $ai={"center"}
        $jc={"space-between"}
        $px={0.8}
        $py={0.8}
      >
        <Typograpy fontSize={descriptionFontSize}>
          {bankName} {bankNumber}
        </Typograpy>
        <FlexBox
          $px={0.8}
          $py={0.4}
          $bw={1}
          $bc={colors.DEFAULT_BORDER_COLOR}
          $br={5}
          $bgcolor={colors.GRAY}
          onClick={() => {
            copyBankInfo(`${bankName} ${bankNumber}`);
          }}
        >
          <Typograpy fontSize={littleDescriptionFontSize}>복사하기</Typograpy>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
