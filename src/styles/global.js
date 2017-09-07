import { injectGlobal } from "styled-components";
import { normalize } from "polished";
import css from "./reset";

injectGlobal`
  ${normalize()},
  ${css}
`;
