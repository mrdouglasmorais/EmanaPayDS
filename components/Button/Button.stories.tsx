import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Button} from './Button';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  args: {
    text: 'Hello World',
    onPress: action('onPress'),
    size: 'medium',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    type: 'primary',
    size: 'large',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    type: 'secondary',
    size: 'medium',
  },
};

export const Tertiary: Story = {
  args: {
    text: 'Tertiary Button',
    type: 'tertiary',
    size: 'small',
  },
};

export const AllSizes: Story = {
  args: {
    text: 'Button with all sizes',
    type: 'primary',
  },
  render: (args) => (
    <>
      <Button {...args} size="large" text="Large Button" />
      <Button {...args} size="medium" text="Medium Button" />
      <Button {...args} size="small" text="Small Button" />
    </>
  ),
};
