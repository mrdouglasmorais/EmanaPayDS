import type { Meta, StoryObj } from '@storybook/react';
import MaskedInput from './InputComponent';
declare const meta: Meta<typeof MaskedInput>;
export default meta;
type Story = StoryObj<typeof MaskedInput>;
export declare const EmailInput: Story;
export declare const PhoneInput: Story;
export declare const CPFInput: Story;
export declare const CNPJInput: Story;
export declare const PasswordInput: Story;
