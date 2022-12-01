import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production'

const webpackConfig: Configuration = {
  devtool: !isProduction ? 'source-map' : false,
  target: 'web',
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    fallback: { // This is to fix the polifylls errors
      buffer: require.resolve('buffer'),
      crypto: require.resolve("crypto-browserify"),
      stream:require.resolve("stream-browserify")
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        },
        exclude: /node_modules/
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
    }
    ]
  },
  optimization: {
    splitChunks: { // This will split our bundles into vendor.js and 
    // main.js
      cacheGroups: {
        default: false,
        commons: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  performance:{
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      publicPath: !isProduction ? 'http://localhost:8080/' : '' // For dev 
      // we will read the bundle from localhost:8080 (webpack-dev-server)
    })
]
}

export default webpackConfig
