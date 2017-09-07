import { lighten, rem } from "polished";

const neutral = "#6b7c93";
const primary = "#7795f8";

export const colors = {
  // White
  light: "#fff",

  // Grey
  neutral,
  neutralLight: lighten(0.1, neutral),

  // Divider
  divider: "#ededed",

  // Blue
  primary,
  primaryLight: lighten(0.1, primary),
};

export const fonts = {
  primary:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',

  XS: rem("10px"),
  S: rem("12px"),
  M: rem("14px"),
  L: rem("16px"),
  XL: rem("18px"),
  XXL: rem("22px"),
  XXXL: rem("28px"),
  XXXXL: rem("36px"),

  regular: 400,
  bold: 700,
};
