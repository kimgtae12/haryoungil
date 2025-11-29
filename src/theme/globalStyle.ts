import styled, { css } from "styled-components";
import { colors } from "./colors";
import {
  BoarderViewType,
  BoxShadowType,
  CustomDivType,
  CustomFlexType,
  CustomImgType,
  CustomTextInputType,
  CustomTextType,
  MarginPaddingMixinType,
  PositionType,
} from "./styles.type";

export const MainMaxWidth = 120;
export const UserMaxWidth = 76.8;

export const breakpoints = {
  mobile: 0,
  pc: 1024,
};

export const getResponsiveCss = (
  propName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
  type: string
) => {
  if (!value) return undefined;
  if (typeof value !== "object") return `${propName}: ${value}${type};`;

  return css`
    ${value.mobile &&
    css`
      @media (max-width: ${breakpoints.pc - 1}px) {
        ${propName}: ${value.mobile}${type};
      }
    `}

    ${value.pc &&
    css`
      @media (min-width: ${breakpoints.pc}px) {
        ${propName}: ${value.pc}${type};
      }
    `}
  `;
};

const marginPaddingMixin = css<MarginPaddingMixinType>`
  ${({ $mt }) => getResponsiveCss("margin-top", $mt, "rem")};
  ${({ $mb }) => getResponsiveCss("margin-bottom", $mb, "rem")};
  ${({ $ml }) => getResponsiveCss("margin-left", $ml, "rem")};
  ${({ $mr }) => getResponsiveCss("margin-right", $mr, "rem")};
  ${({ $pt }) => getResponsiveCss("padding-top", $pt, "rem")};
  ${({ $pb }) => getResponsiveCss("padding-bottom", $pb, "rem")};
  ${({ $pl }) => getResponsiveCss("padding-left", $pl, "rem")};
  ${({ $pr }) => getResponsiveCss("padding-right", $pr, "rem")};
  ${({ $mx }) =>
    $mx &&
    css`
      ${getResponsiveCss("margin-left", $mx, "rem")};
      ${getResponsiveCss("margin-right", $mx, "rem")};
    `}
  ${({ $my }) =>
    $my &&
    css`
      ${getResponsiveCss("margin-top", $my, "rem")};
      ${getResponsiveCss("margin-bottom", $my, "rem")};
    `}
  ${({ $px }) =>
    $px &&
    css`
      ${getResponsiveCss("padding-left", $px, "rem")};
      ${getResponsiveCss("padding-right", $px, "rem")};
    `}
  ${({ $py }) =>
    $py &&
    css`
      ${getResponsiveCss("padding-top", $py, "rem")};
      ${getResponsiveCss("padding-bottom", $py, "rem")};
    `}
  ${({ $ma }) =>
    $ma &&
    css`
      ${getResponsiveCss("margin", $ma, "rem")};
    `}
  ${({ $pa }) =>
    $pa &&
    css`
      ${getResponsiveCss("padding", $pa, "rem")};
    `}
`;

const borderMixin = css<BoarderViewType>`
  ${({ $bw }) =>
    `${$bw && "border-style : solid;"}${getResponsiveCss(
      "border-width",
      $bw,
      "px"
    )}`};
  ${({ $btw }) =>
    `${$btw && "border-top-style : solid;"}${getResponsiveCss(
      "border-width",
      $btw,
      "px"
    )}`};
  ${({ $bbw }) =>
    `${$bbw && "border-bottom-style : solid;"}${getResponsiveCss(
      "border-width",
      $bbw,
      "px"
    )}`};
  ${({ $blw }) =>
    `${$blw && "border-left-style : solid;"}${getResponsiveCss(
      "border-width",
      $blw,
      "px"
    )}`};
  ${({ $brw }) =>
    `${$brw && "border-right-style : solid;"}${getResponsiveCss(
      "border-width",
      $brw,
      "px"
    )}`};

  ${({ $bc }) => $bc && `border-color: ${$bc};`}
  ${({ $btc }) => $btc && `border-top-color: ${$btc};`}
  ${({ $bbc }) => $bbc && `border-bottom-color: ${$bbc};`}
  ${({ $blc }) => $blc && `border-left-color: ${$blc};`}
  ${({ $brc }) => $brc && `border-right-color: ${$brc};`}

  ${({ $br }) => getResponsiveCss("border-radius", $br, "px")};
  ${({ $btlr }) => getResponsiveCss("border-top-left-radius", $btlr, "px")};
  ${({ $btrr }) => getResponsiveCss("border-top-right-radius", $btrr, "px")};
  ${({ $bblr }) => getResponsiveCss("border-bottom-left-radius", $bblr, "px")};
  ${({ $bbrr }) => getResponsiveCss("border-bottom-right-radius", $bbrr, "px")};
`;

const PositionMixin = css<PositionType>`
  ${({ top }) => getResponsiveCss("top", top, "px")};
  ${({ $left }) => getResponsiveCss("left", $left, "px")};
  ${({ $right }) => getResponsiveCss("right", $right, "px")};
  ${({ bottom }) => getResponsiveCss("bottom", bottom, "px")};
`;

const BoxShadowMixin = css<BoxShadowType>`
  ${({ $shadowType }) => {
    if ($shadowType) {
      switch ($shadowType) {
        case "heavy":
          return "box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08), 0px 8px 16px 0px rgba(0, 0, 0, 0.08), 0px 16px 20px 0px rgba(0, 0, 0, 0.12);";
        case "strong":
          return "box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.08), 0px 4px 8px 0px rgba(0, 0, 0, 0.08), 0px 6px 12px 0px rgba(0, 0, 0, 0.12);";
        case "emphasize":
          return "box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 1px 4px 0px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(0, 0, 0, 0.12);";
        case "normal":
        default:
          return "box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.12);";
      }
    }
  }}
`;

const Box = styled.div<CustomDivType>`
  box-sizing: border-box;
  ${marginPaddingMixin}
  ${borderMixin}
  ${PositionMixin}
  ${BoxShadowMixin}

  position: ${({ $position }) => $position || "relative"};
  display: ${({ display }) => display || "block"};
  ${({ $flex }) => $flex && `flex: ${$flex};`}
  ${({ background }) => background && `background: ${background};`}
  ${({ $bgcolor }) => $bgcolor && `background-color: ${$bgcolor};`}
  ${({ $overflow }) => $overflow && `overflow: ${$overflow};`}

  ${({ $width }) =>
    getResponsiveCss("width", $width, typeof $width === "string" ? "" : "rem")};
  ${({ $height }) =>
    getResponsiveCss(
      "height",
      $height,
      typeof $height === "string" ? "" : "rem"
    )};
  ${({ $isFullWidth }) => $isFullWidth && `width: 100%;`}

  ${({ $minWidth }) =>
    getResponsiveCss(
      "min-width",
      $minWidth,
      typeof $minWidth === "string" ? "" : "rem"
    )};
  ${({ $minHeight }) =>
    getResponsiveCss(
      "min-height",
      $minHeight,
      typeof $minHeight === "string" ? "" : "rem"
    )};
  ${({ $maxWidth }) =>
    getResponsiveCss(
      "max-width",
      $maxWidth,
      typeof $maxWidth === "string" ? "" : "rem"
    )};
  ${({ $maxHeight }) =>
    getResponsiveCss(
      "max-height",
      $maxHeight,
      typeof $maxHeight === "string" ? "" : "rem"
    )};

  ${({ backdropFilter }) =>
    backdropFilter &&
    css`
      backdrop-filter: ${backdropFilter};
      -webkit-backdrop-filter: ${backdropFilter};
    `}
  ${({ $isPointer }) => $isPointer && `cursor: pointer;`}
`;

const FlexBox = styled(Box)<CustomFlexType>`
  display: flex;
  ${({ $gap }) => getResponsiveCss("gap", $gap, "rem")};
  flex-direction: ${({ $flexDirection }) => $flexDirection || "column"};
  justify-content: ${({ $jc }) => $jc || "flex-start"};
  align-items: ${({ $ai }) => $ai || "flex-start"};
`;

//P태그 커스텀 - 경태
const CustomPText = styled.p<CustomTextType>`
  font-size: ${({ $fs }) => $fs && `${$fs}rem`};
  color: ${({ $fc }) => $fc || colors.DEFAULT_FONT_COLOR};
  font-family: ${({ $fw }) =>
    $fw ? `${$fw},'Apple SD Gothic Neo'` : `'Regular','Apple SD Gothic Neo'`};

  text-align: ${({ text_align }) => text_align || "left"};
  overflow-y: hidden;
  ${marginPaddingMixin}
  line-height:140%;
  letter-spacing: -0.1rem;
  ${({ background }) => background && `background : ${background};`}
  ${({ textclip }) => textclip && `-webkit-background-clip: text;`}
`;

//text-input 커스텀 - 경태
const CustomTextInput = styled.input<CustomTextInputType>`
  font-size: ${({ $fs }) => $fs && `${$fs}rem`};
  color: ${({ $fc }) => $fc || colors.BLACK};
  font-family: ${({ $fw }) =>
    $fw ? `${$fw},'Apple SD Gothic Neo'` : `'Regular','Apple SD Gothic Neo'`};
  word-break: "break-word";
  ${marginPaddingMixin}
  ${borderMixin}
    ${({ $bgcolor }) => $bgcolor && `background-color: ${$bgcolor};`}
    ${({ width }) =>
    width && `width: ${typeof width === "string" ? width : `${width}rem`};`}
    ${({ height }) =>
    height &&
    `height: ${typeof height === "string" ? height : `${height}rem`};`}

    ${({ ph_color }) =>
    ph_color &&
    `
        ::placeholder : {
            color: ${ph_color}
        }
    `}
`;

const Img = styled.img<CustomImgType>`
  ${({ opacity }) => opacity && `opacity : ${opacity};`}
  ${({ width }) =>
    width && `width: ${typeof width === "string" ? width : `${width}rem`};`}
  ${({ height }) =>
    height &&
    `
        height: ${typeof height === "string" ? height : `${height}rem`};
    `}
    object-fit : ${({ object_fit }) => object_fit || "unset"};
  ${marginPaddingMixin}
  ${borderMixin}

  transition:all 0.3s ease-in-out;
`;

export {
  Box,
  CustomPText,
  CustomTextInput,
  FlexBox,
  borderMixin,
  marginPaddingMixin,
  Img
};
