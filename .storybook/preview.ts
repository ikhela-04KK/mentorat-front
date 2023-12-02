import type { Preview } from "@storybook/react";
import '../src/app/globals.css';
import { withThemeByClassName } from "@storybook/addon-styling";
import { withThemeByDataAttribute } from "@storybook/addon-styling";

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
export const decorators = [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
];
export const decoratorss = [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-bs-theme",
    }),
  ];

export default preview;
