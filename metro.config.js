const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

// Importar o transformer para SVGs
const defaultConfig = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },
};

const finalConfig = mergeConfig(defaultConfig, config);

/**
 * @type {import('@storybook/react-native/metro/withStorybook').WithStorybookOptions}
 */
const storybookOptions = {
  // Habilitar o Storybook quando a variável de ambiente for definida
  enabled: process.env.STORYBOOK_ENABLED === 'true',
  configPath: path.resolve(__dirname, './.ondevice'),

  // Evitar a remoção do Storybook do bundle quando desativado
  onDisabledRemoveStorybook: false,
};

module.exports = withStorybook(finalConfig, storybookOptions);