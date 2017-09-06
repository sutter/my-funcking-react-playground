import { css } from "styled-components";
import { colors, fonts } from "styles/var";
import { rem } from "polished";

export default css`
  /**
   * Init
   * --------------------------------------- */
  html {
    box-sizing: border-box;
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    position: relative;
    font-weight: ${fonts.regular};
    font-size: ${fonts.L};
    font-family: ${fonts.primary};
    background: ${colors.light};
    color: ${colors.neutral};
    line-height: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [tabindex="-1"]:focus {
    outline: none !important;
  }

  [data-whatinput="mouse"],
  [data-whatinput="touch"] {
    &:focus {
      outline: none;
    }
  }

  /**
   * Typography
   * --------------------------------------- */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  p {
    margin: 0;
  }

  small {
    font-size: inherit;
  }

  abbr[title] {
    text-transform: lowercase;
  }

  abbr,
  acronym {
    cursor: help;
  }

  /**
   * Links
   * --------------------------------------- */

  a {
    text-decoration: none;
    color: inherit;

    &:active,
    &:hover,
    &:focus {
      color: inherit;
    }
  }

  /**
   * List
   * --------------------------------------- */

  ul,
  ol,
  dl {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  dl dd {
    margin: 0;
  }

  /**
   * Embed
   * --------------------------------------- */

  img {
    vertical-align: bottom;

    &:not([src$=".svg"]) {
      height: auto;
    }
  }

  img,
  video,
  svg {
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  /**
   * Form
   * --------------------------------------- */

  input,
  select,
  textarea {
    display: block;
  }

  label {
    display: inline-block;
    cursor: pointer;

    abbr {
      display: none;
    }
  }

  textarea {
    resize: vertical;
  }

  [type="checkbox"],
  [type="radio"] {
    display: inline;
  }

  [type="search"] {
    box-sizing: border-box;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
  }

  ::placeholder {
    color: ${colors.neutralLight};
  }

  /**
   * Table
   * --------------------------------------- */

  table {
    max-width: 100%;
    margin: 0;
    border-collapse: collapse;
  }

  tr,
  td,
  th {
    vertical-align: middle;
  }

  th {
    text-align: left;
  }

  /**
   * Horizontal rule
   * --------------------------------------- */

  hr {
    border: 0;
    border-top: 1px solid ${colors.divider};
    margin: ${rem("20px")} 0;
  }
`;
