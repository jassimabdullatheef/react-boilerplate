const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const appEntry = path.join(__dirname, "../app/index.js");

module.exports = {
  context: __dirname,
  entry: [appEntry],
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../app/components/'),
      Pages: path.resolve(__dirname, '../app/pages/'),
      Actions: path.resolve(__dirname, '../app/actions/'),
      Asset: path.resolve(__dirname, '../app/assets/'),
      Utility: path.resolve(__dirname, '../app/utility/')
    }
  },
  optimization: {
    splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all'
            },
            default: {
                minChunks: 2,
                reuseExistingChunk: true
            }
        }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.(s*)css$/,
        use:[
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          'sass-loader']
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
            {
                loader: 'url-loader'
            }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'React Boilerplate',
    template: './template.html'
  })]
};
