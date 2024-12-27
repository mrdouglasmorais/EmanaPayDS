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
      options: ['back', 'settings', 'edit', 'lock', 'eye'],
    },
    size: {
      control: { type: 'number' },
    },
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
  parameters: {
    docs: {
      source: {
        code: `<Icon name="back" size={32} />`,
      },
    },
  },
};

export const SettingsIcon: Story = {
  args: {
    name: 'settings',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon name="settings" size={32} />`,
      },
    },
  },
};

export const EditIcon: Story = {
  args: {
    name: 'edit',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon name="edit" size={32} />`,
      },
    },
  },
};

export const LockIcon: Story = {
  args: {
    name: 'lock',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon name="lock" size={32} />`,
      },
    },
  },
};

export const EyeIcon: Story = {
  args: {
    name: 'eye',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon name="eye" size={32} />`,
      },
    },
  },
};
