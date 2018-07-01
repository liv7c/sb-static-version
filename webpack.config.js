const path = require('path');

module.exports = {
  entry: {
    app: './src/assets/scripts/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'src', 'temp', 'scripts'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
  mode: 'production',
};
