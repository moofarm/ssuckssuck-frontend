/** @type { import('@storybook/react').Preview } */
import "!style-loader!css-loader!postcss-loader!../src/tailwind.css";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
