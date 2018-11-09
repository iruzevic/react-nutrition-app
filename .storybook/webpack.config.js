const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path = require('path');

module.exports = function (defaultConfig, env) {
  const config = genDefaultConfig(defaultConfig, env);

  config.module.rules.push({
    test: /\.(tsx|ts)$/,
    exclude: /node_modules/,
    include: [/src/],
    loader: 'ts-loader'
  });

  config.resolve.modules.push(path.resolve(__dirname, '../src'));

  config.resolve.extensions.push(".tsx");
  config.resolve.extensions.push(".ts");
  config.resolve.extensions.push(".js");

  return config;
};
