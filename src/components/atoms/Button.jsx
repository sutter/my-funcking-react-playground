import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { rem } from "polished";
import { ifProp, switchProp } from "styled-tools";

import { colors } from "styles/var";

const buttonStyleMap = {
  L: {
    height: rem("40px"),
    fontSize: rem("16px"),
    padding: `0 ${rem("15px")}`,
  },
  M: {
    height: rem("30px"),
    fontSize: rem("12px"),
    padding: `0 ${rem("15px")}`,
  },
};

const ButtonBase = ({ type, theme, ...props }) =>
  React.createElement(type, props);

const ButtonStyle = styled(ButtonBase)`
  display: inline-block;
  margin: 0;
  padding: ${props => buttonStyleMap[props.size].padding};
  height: ${props => buttonStyleMap[props.size].height};
  line-height: ${props => buttonStyleMap[props.size].height};
  vertical-align: middle;
  cursor: pointer;
  opacity: ${ifProp("disabled", 0.5, 1)};
  pointer-events: ${ifProp("disabled", "none", "auto")};
  font-family: inherit;
  font-size: ${props => buttonStyleMap[props.size].fontSize};
  text-decoration: none;
  border: 0;
  border-radius: ${rem("3px")};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  user-select: none;
  white-space: nowrap;
  -webkit-user-drag: none;
  -webkit-appearance: none;
  transition: all 0.3s ease;
  outline: 0;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }

  ${switchProp("theme", {
    neutral: css`color: ${colors.neutral};
      fill: ${colors.neutral};
      background: transparent;
      &:hover {
        color: ${colors.neutralLight};
        fill: ${colors.neutralLight};
      }`,
    primary: css`color: ${colors.light};
      fill: ${colors.light};
      background: ${colors.primary};
      &:hover {
        background: ${colors.primaryLight};
      }`,
  })};
`;

export const Button = props => <ButtonStyle {...props} />;

Button.PropTypes = {
  type: PropTypes.oneOf(["a", "button"]).isRequired,
};
Button.defaultProps = {
  theme: "neutral",
  type: "button",
  size: "L",
};
