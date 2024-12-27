import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import DSSplashScreen from './SplashScreen';
import type { Meta, StoryFn } from '@storybook/react';

const { width, height } = Dimensions.get('window');

export default {
  title: 'Components/DSSplashScreen',
  component: DSSplashScreen,
  argTypes: {
    videoDuration: {
      control: { type: 'number' },
      description: 'Duration of the video in milliseconds',
      defaultValue: 8000,
    },
    onSplashEnd: { action: 'onSplashEnd', description: 'Callback when the splash ends' },
  },
} as Meta<typeof DSSplashScreen>;

const Template: StoryFn<typeof DSSplashScreen> = (args) => {
  return (
    <View style={styles.container}>
      <DSSplashScreen {...args} />
    </View>
  );
};

export const Default = Template.bind({});
Default.args = {
  videoDuration: 8000,
  onSplashEnd: () => console.log('Splash Ended'),
};

export const InfiniteLoop = Template.bind({});
InfiniteLoop.args = {
  videoDuration: Infinity,
  onSplashEnd: undefined,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    backgroundColor: 'white',
  },
});
