import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";
import { grid } from "../../styles/var.js";

import AppHeader from "../organisms/AppHeader";
import AppFooter from "../organisms/AppFooter";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Body = styled.div`
  flex: 1 auto;
  padding: ${grid.gutter.L};

  ${ifProp(
    "centerContent",
    css`
      display: flex;
      align-items: center;
    `
  )};
`;

const AppMainLayout = ({ centerContent, ...props }) => (
  <Main>
    <AppHeader />
    <Body centerContent={centerContent}>{props.children}</Body>
    <AppFooter />
  </Main>
);

AppMainLayout.PropTypes = {
  centerContent: PropTypes.bool,
};

export default AppMainLayout;
