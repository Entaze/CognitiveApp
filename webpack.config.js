
// var path = require("path");
// var SRC_DIR = path.join(__dirname, "/client/src");
// var DIST_DIR = path.join(__dirname, "/client/dist");

// module.exports = {
//   entry: `${SRC_DIR}/index.js`,
//   mode: "development",
//   output: {
//     filename: "bundle.js",
//     path: DIST_DIR,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         loader: "babel-loader",
//         options: {
//           presets: ["@babel/preset-env", "@babel/preset-react"],
//           plugins: ['@babel/plugin-transform-runtime']
//         },
//       },
//     ],
//   },
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: path.join(__dirname, "client/src", "index.js"),
  mode: "development",
  output: {
    path:path.resolve(__dirname, "client/dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.join(__dirname, "client/src", "index.html"),
  //   }),
  // ],
}
