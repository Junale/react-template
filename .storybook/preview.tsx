import type { Preview } from "@storybook/react";
import "../src/index.css";
import React from "react";
import { withThemeByClassName } from "@storybook/addon-themes";



const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
    options: {
      // The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
      storySort: (a, b) => {
        // Prioritize docs stories
        if (a.id.includes("docs") && !b.id.includes("docs"))
          return -1;

        if (!a.id.includes("docs") && b.id.includes("docs"))
          return 1;

        // If both or neither are docs, sort alphabetically
        return a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true });
      },
    },
  },
  decorators: [
    (Story, context) => {
      const themeClass = context.globals.theme === "dark" ? "bg-black" : "bg-white";
      return (
        <div className={"flex h-screen w-screen flex-col items-center justify-center " + themeClass}>
          <Story />
        </div>
      );
    },
    withThemeByClassName({
      themes: {
        // NameOfTheme: 'classNameForTheme',
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    })
  ],
  tags: ["autodocs"],
};

export default preview;