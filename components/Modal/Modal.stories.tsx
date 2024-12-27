import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Meta, StoryFn } from '@storybook/react';
import Modal from './Modal';

export default {
  title: 'Components/DSModal',
  component: Modal,
  argTypes: {
    visible: { control: 'boolean' },
    title: { control: 'text' },
    content: { control: 'text' },
    showCloseButton: { control: 'boolean' },
    buttonLabel: { control: 'text' },
    onClose: { action: 'closed' },
    onButtonPress: { action: 'button pressed' },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <Modal
        {...args}
        visible={modalVisible}
        onClose={() => {
          args.onClose?.();
          setModalVisible(false);
        }}
      />
    </View>
  );
};

export const Default = Template.bind({});
Default.args = {
  visible: false,
  title: 'Default Modal Title',
  content: 'This is the default content of the modal.',
  showCloseButton: true,
  buttonLabel: 'Confirm',
  onButtonPress: () => console.log('Button Pressed'),
};

export const WithoutCloseButton = Template.bind({});
WithoutCloseButton.args = {
  visible: false,
  title: 'No Close Button',
  content: 'This modal does not have a close button.',
  showCloseButton: false,
  buttonLabel: 'Proceed',
};

export const OnlyContent = Template.bind({});
OnlyContent.args = {
  visible: false,
  content: 'This modal only contains text without additional buttons.',
  showCloseButton: false,
};
