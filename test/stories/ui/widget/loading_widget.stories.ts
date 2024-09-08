import type { Meta, StoryObj } from "@storybook/react";

import LoadingWidget from "@/ui/widget/loading_widget";

const meta: Meta<typeof LoadingWidget> = {
	title: "UI/widget/LoadingWidget",
	component: LoadingWidget,
};

export default meta;
type Story = StoryObj<typeof LoadingWidget>;

export const Default: Story = {};
