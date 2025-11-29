import { ResponsesiveValueType } from "./styles.type";

export interface FontStyleElType {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}

export const fontSize: { [key: string]: ResponsesiveValueType<number> } = {
  title: { pc: 0, mobile: 0 },
  subtitle: { pc: 0, mobile: 0 },
  section_title: { pc: 0, mobile: 0 },
  body: { pc: 0, mobile: 0 },
  button: { pc: 0, mobile: 0 },
  caption: { pc: 0, mobile: 0 },
};
