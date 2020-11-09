const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    "bundle.js": [path.resolve('build/static/css/main.min.css'), path.resolve('build/static/js/bundle.min.js')],
  },
  output: {
    filename: "bundle.min.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new UglifyJsPlugin()],
}