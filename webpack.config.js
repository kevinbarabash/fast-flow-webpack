const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './example/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          // runst second
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'jsx',  // Remove this if you're not using JSX
              target: 'es2015'  // Syntax to compile to (see options below for possible values)
            },
          },
          // runs first
          {
            loader: path.resolve("loaders/remove-flow-loader.js"),
            options: {
              test: "foo",
            },
          },
        ],
      },
    ],
  },
};
