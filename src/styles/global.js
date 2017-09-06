import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";
import css from "styles/reset";

injectGlobal`
  ${styledNormalize}
  ${css}
`;
