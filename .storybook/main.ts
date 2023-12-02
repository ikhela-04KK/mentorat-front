import type { StorybookConfig } from "@storybook/nextjs";
import path from 'path';

const config: StorybookConfig = {
  
  stories: [
    "../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/features/**/*.mdx", "../src/features/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: true,
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    // Vérifier si config.resolve existe avant d'ajouter des alias
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, "../src"),
        '@features':path.resolve(__dirname, "../src/features"),
      };
    }

    return config;
  },

  docs: {
    autodocs: "tag",
  },
  
  staticDirs:["../public"]
};
export default config;

