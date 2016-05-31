const path = require('path');
const merge - require('webpack-merge');

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
  }
};

// Default config - will be returned if webpack called outside of npm
if (TARGET == 'start' || !TARGET) {
  module.exports = merge(common, {});
}

if (TARGET == 'build') {
  modue.exports = merge(common, {});
}
