import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icons';

const meta: Meta<typeof Icon> = {
  title: 'components/Icons',
  component: Icon,
  args: {
    size: 32,
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['back', 'settings', 'edit', 'lock'],
    },
    size: {
      control: { type: 'number' },
    },
    // color: {
    //   control: { type: 'color' },
    // },
    style: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BackIcon: Story = {
  args: {
    name: 'back',
  },
};

export const SettingsIcon: Story = {
  args: {
    name: 'settings',
  },
};

export const EditIcon: Story = {
  args: {
    name: 'edit',
  },
};

export const LockIcon: Story = {
  args: {
    name: 'lock',
  },
};