import Typograpy from "component/molecules/Typograpy";
import { DonationInfoCard } from "component/organisms/card/DonationInfoCard";
import React from "react";
import { colors } from "theme/colors";
import { FlexBox } from "theme/globalStyle";
import { donationBankInfoList } from "utils/list";

export const DonationArea = () => {
  const contentsFontSize = { pc: 2, mobile: 1.6 };

  const [groomDonationAccodian, setGroomDonationAccodian] =
    React.useState(false);
  const [brideDonationAccodian, setBrideDonationAccodian] =
    React.useState(false);

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
          마음 전하는 곳
        </Typograpy>
      </FlexBox>

      <FlexBox $isFullWidth>
        <FlexBox
          $flexDirection="row"
          $ai={"center"}
          $isFullWidth
          $jc={"center"}
          //   $bbw={1}
          $bbc={colors.DEFAULT_BORDER_COLOR}
          $pb={0.8}
          $gap={0.8}
          onClick={() => {
            setGroomDonationAccodian(!groomDonationAccodian);
          }}
        >
          <Typograpy fontWeight="Eulyoo-SemiBold" fontSize={contentsFontSize}>
            신랑측 계좌번호 확인하기
          </Typograpy>
          {groomDonationAccodian ? (
            <img
              src={require(`assets/img/v2/ic_up.png`)}
              width={12}
              height={12}
            />
          ) : (
            <img
              src={require(`assets/img/v2/ic_down.png`)}
              width={12}
              height={12}
            />
          )}
        </FlexBox>
        {groomDonationAccodian ? (
          <FlexBox $isFullWidth $gap={1.2} $mt={1.6}>
            {donationBankInfoList["groom"].map((donation, index) => {
              return (
                <DonationInfoCard
                  key={"donation" + index}
                  name={donation.name}
                  bankName={donation.bankName}
                  bankNumber={donation.bankNumber}
                />
              );
            })}
          </FlexBox>
        ) : (
          <></>
        )}
      </FlexBox>
      <FlexBox $isFullWidth $mt={2}>
        <FlexBox
          $flexDirection="row"
          $ai={"center"}
          $isFullWidth
          $jc={"center"}
          //   $bbw={1}
          $bbc={colors.DEFAULT_BORDER_COLOR}
          $pb={0.8}
          $gap={0.8}
          onClick={() => {
            setBrideDonationAccodian(!brideDonationAccodian);
          }}
        >
          <Typograpy fontWeight="Eulyoo-SemiBold" fontSize={contentsFontSize}>
            신부측 계좌번호 확인하기
          </Typograpy>
          {brideDonationAccodian ? (
            <img
              src={require(`assets/img/v2/ic_up.png`)}
              width={12}
              height={12}
            />
          ) : (
            <img
              src={require(`assets/img/v2/ic_down.png`)}
              width={12}
              height={12}
            />
          )}
        </FlexBox>
        {brideDonationAccodian ? (
          <FlexBox $isFullWidth $gap={1.2} $mt={1.6}>
            {donationBankInfoList["bride"].map((donation, index) => {
              return (
                <DonationInfoCard
                  key={"donation" + index}
                  name={donation.name}
                  bankName={donation.bankName}
                  bankNumber={donation.bankNumber}
                />
              );
            })}
          </FlexBox>
        ) : (
          <></>
        )}
      </FlexBox>
    </FlexBox>
  );
};
