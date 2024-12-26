module.exports = {
  stories: ['../components/**/*.stories.?(ts|tsx|js|jsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
    '@storybook/addon-docs'
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {},

  staticDirs: [{ from: './assets', to: '/assets' }],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  webpackFinal: async (config) => {
    // Excluir SVGs do tratamento padrão de assets
    const assetRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );
    if (assetRule) {
      assetRule.exclude = /\.svg$/;
    }

    // Adicionar loader para processar SVGs como componentes React
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};