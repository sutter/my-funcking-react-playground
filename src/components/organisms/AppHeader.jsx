import React from "react";
import styled from "styled-components";
import { grid } from "../../styles/var.js";

const Header = styled.header`padding: ${grid.gutter.L};`;

const AppHeader = () => {
  return (
    <Header>
      <a href="https://sutterlity.fr/">Sutterlity</a>
    </Header>
  );
};

export default AppHeader;
