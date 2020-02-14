import React from "react";
import { storiesOf } from "@storybook/react";

import CustomButton from "./CustomButton";

storiesOf("Custom button", module).add("CustomButton", () => {
  return <CustomButton text="Custom button" />;
});
