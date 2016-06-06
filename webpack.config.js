const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'), build: path.join(__dirname, 'build')
};

const common = {

// Entry accepts a path or an object of entries. We'll be using the // latter form given it's convenient with more complex configurations.
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        // test expects a regexp
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      }
    ]
  }
};

// Default config - will be returned if webpack called outside of npm
if (TARGET == 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,

      // enable history API fallback so HTML5 History API based routing works
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // display only errors to reduce amount of output
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true // --save
      })
    ]
  });
}

if (TARGET == 'build') {
  modue.exports = merge(common, {});
}
