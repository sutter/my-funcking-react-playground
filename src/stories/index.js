import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button } from "../components/atoms/Button.jsx";

storiesOf("Button", module)
  .add("Neutral", () => <Button>Hello Button</Button>)
  .add("Primary", () => <Button theme="primary">Hello Button</Button>)
  .add("Medium size", () => (
    <div>
      <Button size="M">Hello Button</Button>{" "}
      <Button theme="primary" size="M">
        Hello Button
      </Button>
    </div>
  ));
