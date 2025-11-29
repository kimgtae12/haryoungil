"use client";

import styled from "styled-components";
import { colors } from "theme/colors";
import { getResponsiveCss, marginPaddingMixin } from "theme/globalStyle";
import { CustomTextType } from "theme/styles.type";

export const Text = styled.span<CustomTextType>`
  ${({ $fs }) => getResponsiveCss("font-size", $fs, "rem")};
  ${({ $lh }) => getResponsiveCss("line-height", $lh, "rem")};
  color: ${({ $fc }) => $fc || colors.DEFAULT_FONT_COLOR};
  font-family: ${({ $fw }) =>
    $fw ? `${$fw},'Apple SD Gothic Neo'` : `'Eulyoo-Regular','Apple SD Gothic Neo'`};
  text-align: ${({ text_align }) => text_align || "left"};
  word-break: break-word;
  ${marginPaddingMixin}
  ${({ background }) => background && `background : ${background};`}
    ${({ textclip }) => textclip && `-webkit-background-clip: text;`}
  ${({ fontStyle }) => fontStyle && `${fontStyle}`};
  ${({ $maxLine }) =>
    $maxLine &&
    `
     overflow: hidden;
     white-space: normal;
     text-overflow: ellipsis;
     display: -webkit-box;
     -webkit-box-orient: vertical;
  `}
  ${({ $maxLine }) => getResponsiveCss("-webkit-line-clamp", $maxLine, "")};

  ${({ $hoverColor }) =>
    $hoverColor &&
    `
      &:hover{
        color : ${$hoverColor};
      }
    `}
`;

export const PreText = styled.pre<CustomTextType>`
  ${({ $fs }) => $fs && `${$fs}rem`};
  ${({ $lh }) => getResponsiveCss("line-height", $lh, "rem")};
  color: ${({ $fc }) => $fc || colors.BLACK};
  font-family: ${({ $fw }) =>
    $fw ? `${$fw},'Apple SD Gothic Neo'` : `'Regular','Apple SD Gothic Neo'`};
  text-align: ${({ text_align }) => text_align || "left"};
  word-break: break-word;
  ${marginPaddingMixin}
  ${({ background }) => background && `background : ${background};`}
    ${({ textclip }) => textclip && `-webkit-background-clip: text;`}
  ${({ fontStyle }) => fontStyle && `${fontStyle}`};

  ${({ $hoverColor }) =>
    $hoverColor &&
    `
      &:hover{
        color : ${$hoverColor};
      }
    `}
`;
