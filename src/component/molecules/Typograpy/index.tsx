import { hover } from "@testing-library/user-event/dist/hover";
import { Text } from "component/atom/text/text";
import React, { CSSProperties, ReactNode } from "react";
import { colors } from "theme/colors";
import { FontStyleElType } from "theme/fontStyle";
import { FlexBox } from "theme/globalStyle";
import { ResponsesiveValueType } from "theme/styles.type";

interface TypograpyType {
  fontSize?: ResponsesiveValueType<number> | number;
  fontWeight?:
    | "Hanyun"
    | "Eulyoo-Regular"
    | "Eulyoo-SemiBold"
    | "Thin"
    | "Light"
    | "Regular"
    | "Medium"
    | "SemiBold"
    | "Bold"
    | "ExtraBold";
  style?: CSSProperties;
  color?: string;
  children: ReactNode;
  type?: "default" | "pri" | "assis";
  leftIcon?: string;
  rightIcon?: string;
  iconSize?: number;
  fontStyle?: string;
  isPreWrap?: boolean;

  className?: string;

  hoverColor?: string;
}

const Typograpy = React.memo(
  ({
    fontSize,
    fontWeight,
    style,
    color,
    children,
    type = "default",
    leftIcon,
    rightIcon,
    iconSize,
    fontStyle,
    className,
    hoverColor,
    isPreWrap,
  }: TypograpyType) => {
    if (leftIcon || rightIcon) {
      return (
        <FlexBox $flexDirection="row" $jc="center" $ai="center" $gap={0.4}>
          {leftIcon && (
            <img
              src={leftIcon}
              width={iconSize || 20}
              height={iconSize || 20}
            />
          )}
          <Text
            $fs={fontSize}
            $fc={color}
            $fw={fontWeight}
            fontStyle={fontStyle}
            className={className}
            style={{ whiteSpace: isPreWrap ? "pre-wrap" : "nowrap", ...style }}
            $hoverColor={hoverColor}
          >
            {children}
          </Text>
          {rightIcon && (
            <img
              src={rightIcon}
              width={iconSize || 20}
              height={iconSize || 20}
            />
          )}
        </FlexBox>
      );
    } else {
      return (
        <Text
          style={{ whiteSpace: isPreWrap ? "pre-wrap" : "nowrap", ...style }}
          $fs={fontSize}
          $fc={color}
          $fw={fontWeight}
          fontStyle={fontStyle}
          className={className}
          $hoverColor={hoverColor}
        >
          {children}
        </Text>
      );
    }
  }
);

export default Typograpy;
