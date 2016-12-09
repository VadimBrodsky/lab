const webpackEnv = {env: 'test'};
const webpackConfig = require('./webpack.config')(webpackEnv);
const fileGlob = 'src/**/*.test.js';

module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [fileGlob],
    reporters: ['progress'],
    preprocessors: {
      [fileGlob]: ['webpack']
    },
    webpack: webpackConfig,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
  });
};
