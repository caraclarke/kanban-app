const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'), build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {

// Entry accepts a path or an object of entries. We'll be using the // latter form given it's convenient with more complex configurations.
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'index.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        // define an include so we check just the files we need
        include: PATHS.app
      }
    ],
    loaders: [
      {
        // test expects a regexp
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
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
  module.exports = merge(common, {});
}
