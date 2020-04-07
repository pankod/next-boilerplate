const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.[tj]s[x]'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource/register',
    'storybook-addon-styled-component-theme/dist/register',
    '@storybook/addon-viewport/register',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.extensions.push(".ts", ".tsx");

    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    });

    return config;
  },
};
