import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test'


import PrimaryButton from "@/ui/button/primary_button";

const meta: Meta<typeof PrimaryButton> = {
	title: 'UI/button/PrimaryButton',
	component: PrimaryButton,
	args: { onClick: action('onClick') },
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const WithText: Story = {
	args: {
		children: 'Click me',
	},
	play: async ({canvasElement}) => {
		const canvas = within(canvasElement);
		
		await expect(canvas.getByText('Click me')).toBeTruthy();


	}
};

export const NoInputs: Story = {
	'args': {},
};

