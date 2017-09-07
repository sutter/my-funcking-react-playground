import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";

import { Button } from "../components/atoms/Button.jsx";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("Base button", () => (
    <Button
      type={select("Type", { a: "a", button: "button" }, "button")}
      disabled={boolean("Disabled", false)}
      theme={select(
        "Theme",
        { neutral: "neutral", primary: "primary" },
        "neutral"
      )}
      size={select("Size", { L: "L", M: "M" }, "L")}
      fullWidth={boolean("Full Width", false)}
    >
      {text("Children", "Hello Button")}
    </Button>
  ));
