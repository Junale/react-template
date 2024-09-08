import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../test/**/*.mdx", "../test/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: true,
        controls: true,
        backgrounds: false,
        viewport: true,
        toolbars: true,
      }
    },
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-themes",
    "@storybook/addon-coverage"

  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
