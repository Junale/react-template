import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/index.css'; // replace with the name of your tailwind css file



const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
          { name: 'light', value: '#ffffff' },
          { name: 'dark', value: '#333333' },
      ],
    },
    options: {
        // The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
        storySort: (a, b) => {
            // Prioritize docs stories
            if (a.id.includes('docs') && !b.id.includes('docs')) {
                return -1;
            }
            if (!a.id.includes('docs') && b.id.includes('docs')) {
                return 1;
            }
            // If both or neither are docs, sort alphabetically
            return a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true });
        },
    },
  },
  decorators: [withThemeByClassName<ReactRenderer>({
      themes: {
          // nameOfTheme: 'classNameForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'light',
  })],
  tags: ['autodocs'],
};

export default preview;