import { lighten } from "polished";

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

  XS: "1rem",
  S: "1.2rem",
  M: "1.4rem",
  L: "1.6rem",
  XL: "1.8rem",
  XXL: "2.2rem",
  XXXL: "2.8rem",
  XXXXL: "3.6rem",

  regular: 400,
  bold: 700,
};
