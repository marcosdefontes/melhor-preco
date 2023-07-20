import type { Meta, StoryObj } from '@storybook/svelte';

import Button from './Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		type: {
			options: ['primary', 'secondary'],
			description: 'Button type',
			control: { type: 'select' }
		},
		isCircle: {
			description: 'Circle Button',
			control: 'boolean'
		},
		label: {
			control: { type: 'text' },
			description: 'Button Label'
		}
	}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
	args: {
		type: 'primary',
		label: 'Primary'
	}
};

export const Secondary: Story = {
	args: {
		type: 'secondary',
		label: 'Secondary'
	}
};
