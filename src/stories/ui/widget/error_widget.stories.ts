import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';


import ErrorWidget from "@/ui/widget/error_widget";

const meta: Meta<typeof ErrorWidget> = {
	title: 'UI/widget/ErrorWidget',
	component: ErrorWidget,
	args: { onClose: action('onClose') },
};

export default meta;
type Story = StoryObj<typeof ErrorWidget>;



export const NoInputs: Story = {
	'args': {},
};

export const WithError: Story = {
	args: {
		error: new Error('An error occurred'),
	},
};

export const withLongErrorMessage: Story = {
	args: {
		error: new Error('An error occurred with a very long message that will wrap to the next line and continue to be displayed in full'),
	},
};

export const WithButtonText: Story = {
	args: {
		buttonText: 'Dismiss',
	},
};

export const WithErrorAndButtonText: Story = {
	args: {
		error: new Error('An error occurred'),
		buttonText: 'Dismiss',
	},
};
