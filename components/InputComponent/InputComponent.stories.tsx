import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import MaskedInput from './InputComponent';

const meta: Meta<typeof MaskedInput> = {
  title: 'Components/MaskedInput',
  component: MaskedInput,
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'email',
    value: '',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['email', 'phone', 'cpf', 'cnpj', 'password'],
    },
    widthType: {
      control: 'select',
      options: ['80%', '60%'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof MaskedInput>;

const Template = ({ label, placeholder, type, widthType }: any) => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <MaskedInput
        label={label}
        placeholder={placeholder}
        type={type}
        widthType={widthType}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
};

export const EmailInput: Story = {
  render: Template,
  args: {
    label: 'Email',
    placeholder: 'email@email.com',
    type: 'email',
    widthType: '80%',
  },
};

export const PhoneInput: Story = {
  render: Template,
  args: {
    label: 'Phone',
    placeholder: '(11) 99999.9999',
    type: 'phone',
    widthType: '80%',
  },
};

export const CPFInput: Story = {
  render: Template,
  args: {
    label: 'CPF',
    placeholder: '999.999.999-99',
    type: 'cpf',
    widthType: '60%',
  },
};

export const CNPJInput: Story = {
  render: Template,
  args: {
    label: 'CNPJ',
    placeholder: '99.999.999/9999-99',
    type: 'cnpj',
    widthType: '60%',
  },
};

export const PasswordInput: Story = {
  render: Template,
  args: {
    label: 'Password',
    placeholder: '****',
    type: 'password',
    widthType: '80%',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
});