import { fn } from "@storybook/test";
import { Footer } from "./Footer";

export default {
  title: "Example/Footer",
  component: Footer,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export const Default = {
  args: {
    onClick: fn(),
  },
};
