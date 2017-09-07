import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { switchProp } from "styled-tools";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${switchProp("size", {
    M: "600px",
    L: "960px",
  })};
`;

const Wrapper = ({ size, ...props }) => (
  <Container size={size}>{props.children}</Container>
);

Wrapper.PropTypes = {
  size: PropTypes.oneOf(["M", "L"]).isRequired,
};
Wrapper.defaultProps = {
  size: "L",
};

export default Wrapper;
