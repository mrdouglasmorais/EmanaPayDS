import { addons } from '@storybook/addons';
import { themes, ThemeVars } from '@storybook/theming';

const customTheme: ThemeVars = {
  ...themes.light,
  brandTitle: 'Emanapay Design System',
  brandUrl: 'https://emanapay.com',
  brandImage: './assets/logo.png',
  appBg: '#0D402A',
  appContentBg: '#ffffff',
  barBg: '#FF6E9E',
  barTextColor: '#ffffff',
  barSelectedColor: '#ffffff',
  appBorderColor: '#ffffff',
  appBorderRadius: 8,
  textColor: '#bcbcbc',
  textMutedColor: '#bcbcbc',
};

addons.setConfig({
  theme: customTheme,
});