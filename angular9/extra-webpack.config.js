const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const webpackMerge = require('webpack-merge');
// 这个appName应为子应用路径
const appName = 'v1';

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);

  const singleSpaConfig = {
    output: {
      library: `${appName}-[name]`,
      libraryTarget: 'umd',
    },
    externals: {
      'zone.js': 'Zone',
    },
  };
  const mergedConfig = webpackMerge.smart(singleSpaWebpackConfig, singleSpaConfig);
  return mergedConfig;
};
