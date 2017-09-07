import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";

const Header = styled.header`padding: 2rem;`;

const AppHeader = () => {
  return (
    <Header>
      <Button theme="primary">Primary</Button>
      <Button size="M">Neutral</Button>
    </Header>
  );
};

export default AppHeader;
