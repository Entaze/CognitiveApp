// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: path.join(__dirname, "client/src", "index.js"),
//   mode: "development",
//   output: {
//     path:path.resolve(__dirname, "client/dist" ),
//     publicPath: '/',
//     filename: "main.js",
//   },
//   devtool: "eval-cheap-source-map",
//   module: {
//     rules: [
//       {
//         test: /\.(sass|css|scss|js|mjs|jsx|ts|tsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         }
//       },
//       {
//         test: /\.css$/,
//         use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
//       },
//       {
//         test: /\.js$/,
//         enforce: 'pre',
//         use: ['source-map-loader'],
//       },
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//     modules: ['src', 'node_modules', 'client/src/Components/ProfileSetUp/AccountBox']
//   },
// }

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "client/src", "index.js"),
  mode: "development",
  output: {
    path:path.resolve(__dirname, "client/dist" ),
    publicPath: '/',
    filename: "main.js",
  },
  devtool: "eval-cheap-source-map",
  module: {
    rules: [
      {
        test: /\.(sass|css|scss|js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // [['@babel/preset-env', {targets: {node: 'current'}}]]
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'Logo',
        }
    },
  {
    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
    loader: "url-loader",
  }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    modules: ['src', 'node_modules']
  },
}
