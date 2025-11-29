export type ContainerType = {
  $bgcolor?: string;
};

export type ResponsesiveValueType<T> = {
  pc: T;
  mobile: T;
};

export type MarginPaddingMixinType = {
  $ml?: ResponsesiveValueType<number> | number; //marginLeft
  $mr?: ResponsesiveValueType<number> | number; //marginRight
  $mb?: ResponsesiveValueType<number> | number; //marginBottom
  $mt?: ResponsesiveValueType<number> | number; //marginTop

  $pl?: ResponsesiveValueType<number> | number; //paddingLeft
  $pr?: ResponsesiveValueType<number> | number; //paddingRight
  $pb?: ResponsesiveValueType<number> | number; //paddingBottom
  $pt?: ResponsesiveValueType<number> | number; //paddigTop

  $mx?: ResponsesiveValueType<number> | number;
  $my?: ResponsesiveValueType<number> | number;
  $px?: ResponsesiveValueType<number> | number;
  $py?: ResponsesiveValueType<number> | number;

  $ma?: ResponsesiveValueType<number> | number; //margin
  $pa?: ResponsesiveValueType<number> | number; //padding
};
export type BoarderViewType = {
  $bw?: ResponsesiveValueType<number> | number; //border 전체 width
  $btw?: ResponsesiveValueType<number> | number; //border top width
  $bbw?: ResponsesiveValueType<number> | number; //border bottom width
  $blw?: ResponsesiveValueType<number> | number; //border left width
  $brw?: ResponsesiveValueType<number> | number; //border right width

  $bc?: string | ResponsesiveValueType<string>; //border 전체 color
  $btc?: string | ResponsesiveValueType<string>; // border top color
  $bbc?: string | ResponsesiveValueType<string>; // border bottom color
  $blc?: string | ResponsesiveValueType<string>; // border left color
  $brc?: string | ResponsesiveValueType<string>; // border right color

  $br?: ResponsesiveValueType<number> | number; // border 전체 radius
  $btlr?: ResponsesiveValueType<number> | number; // border top left radius
  $btrr?: ResponsesiveValueType<number> | number; // border top right radius
  $bblr?: ResponsesiveValueType<number> | number; // border bottom left radius
  $bbrr?: ResponsesiveValueType<number> | number; // border bottom right radius
};

export type PositionType = {
  top?: ResponsesiveValueType<number> | number;
  $left?: ResponsesiveValueType<number> | number;
  $right?: ResponsesiveValueType<number> | number;
  bottom?: ResponsesiveValueType<number> | number;
};

export type BoxShadowType = {
  $shadowType?: "normal" | "emphasize" | "strong" | "heavy";
};

export type CustomDivType = MarginPaddingMixinType &
  BoarderViewType &
  PositionType &
  BoxShadowType & {
    $position?: string;
    $bgcolor?: string | ResponsesiveValueType<string>; //background color
    $flex?: number | ResponsesiveValueType<number>;
    $minWidth?: ResponsesiveValueType<string | number> | string | number;
    $minHeight?: ResponsesiveValueType<string | number> | string | number;
    $maxWidth?: ResponsesiveValueType<string | number> | string | number;
    $maxHeight?: ResponsesiveValueType<string | number> | string | number;

    $isFullWidth?: boolean;
    $width?:
      | ResponsesiveValueType<string>
      | ResponsesiveValueType<number>
      | string
      | number; //width는 %일경우 string으로 넣어주세요. ex) '100%' , px일경우 number로 넣어주세요.
    $height?:
      | ResponsesiveValueType<string>
      | ResponsesiveValueType<number>
      | string //height %일경우 string으로 넣어주세요. ex) '100%' , px일경우 number로 넣어주세요.
      | number;
    display?: string;

    background?: string;
    backdropFilter?: string;
    $isPointer?: boolean;
    $overflow?: string;
  };

export type CustomFlexType = CustomDivType &
  MarginPaddingMixinType & {
    $flexDirection?: "row" | "column";
    $gap?: ResponsesiveValueType<number> | number;
    $jc?:
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-between"
      | "space-around"
      | "space-evenly";
    $ai?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  };

export type CustomGirdType = MarginPaddingMixinType & {
  gtc?: string; //grid-template-columns
  gtr?: string; //grid-template-rows
  $gap?: ResponsesiveValueType<number>;
};

export type MarginComType = {
  $mt?: ResponsesiveValueType<number>; //margin top
  $mb?: ResponsesiveValueType<number>; //margin bottom
};

export type CustomTextType = MarginPaddingMixinType & {
  $fs?: ResponsesiveValueType<number> | number; //fontSize
  $fc?: string; //font color
  $fw?:
    'Eulyoo-Regular' |
    'Eulyoo-SemiBold'
    | "Thin"
    | "Light"
    | "ExtraLight"
    | "Regular"
    | "Medium"
    | "SemiBold"
    | "Bold"
    | "ExtraBold"; //font weight
  text_align?: string;
  $bgcolor?: string;
  background?: string;
  textclip?: ResponsesiveValueType<number>;
  fontStyle?: string;

  $hoverColor?: string; //hover 색상
  $lh?: ResponsesiveValueType<number> | number;
  $maxLine?: ResponsesiveValueType<number> | number;
};

export type CustomTextInputType = MarginPaddingMixinType &
  BoarderViewType & {
    $fs?: ResponsesiveValueType<number>; // fontSize
    $fc?: string; // fontColor
    $fw?:
      | "Thin"
      | "Light"
      | "DemiLight"
      | "Regular"
      | "Medium"
      | "SemiBold"
      | "Bold"
      | "ExtraBold"; //font Weight
    $bgcolor?: string; //background color
    ph_color?: string; //placeholder color
    width?: string | ResponsesiveValueType<number>; //width는 %일경우 string으로 넣어주세요. ex) '100%' , px일경우 number로 넣어주세요.
    height?: string | ResponsesiveValueType<number>; //height %일경우 string으로 넣어주세요. ex) '100%' , px일경우 number로 넣어주세요.
    pg_color?: string;
  };

export type CustomImgType = MarginPaddingMixinType &
  BoarderViewType & {
    width: ResponsesiveValueType<number> | string;
    height?: ResponsesiveValueType<number> | string;
    object_fit?: string;
    opacity?: number;
  };
