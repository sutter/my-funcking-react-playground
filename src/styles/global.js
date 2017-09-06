import { injectGlobal } from "styled-components";
import { normalize } from "polished";
import css from "styles/reset";

injectGlobal`
  ${normalize()},
  ${css}
`;
