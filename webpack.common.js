const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// css/css module
const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
// sass/sass module
const sassRegex = /\.(scss|sass)$/
const sassModuleRegex = /\.module\.(scss|sass)$/
// less/less module
const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/
// stylus/stylus module
const stylRegex = /\.styl$/
const stylModuleRegex = /\.module\.styl$/

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      index: './src/index.tsx',
    },
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'web-build/'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './build/index.html',
      }),
      new WebpackBar(),
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      // new BundleAnalyzerPlugin({
      //   analyzerMode: 'disabled',
      //   generateStatsFile: true,
      //   statsOptions: { source: false },
      // }),
      /* Need to research configuration, pro/cons
      new webpack.DllReferencePlugin({
        context: __dirname,
        // manifest: require('./manifest.json'),
        scope: 'xyz',
        sourceType: 'commonjs2',
      }),
      */
      /* Removed since it prevented Axios to run from outer source
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      */
    ],
    resolve: {
      extensions: ['.tsx', '.jsx', '.ts', '.js', '.json', '.wasm'],
      alias: {
        '@abs': path.resolve(__dirname, './src'),
        '@communication': path.resolve(__dirname, '../yourails_communication_layer'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js|ts|tsx)?$/, // You already have this rule
          use: [
            'thread-loader',
            {
              loader: 'swc-loader',
              options: {
                jsc: {
                  parser: {
                    syntax: 'typescript', // If you're using TypeScript
                    tsx: true, // Enable JSX parsing in TypeScript
                    jsx: true, // For regular JSX files
                  },
                  transform: {
                    react: {
                      pragma: 'React.createElement', // Defaults to React
                      pragmaFrag: 'React.Fragment',
                      throwIfNamespace: false, // React namespace handling
                      development: process.env.NODE_ENV === 'development',
                      useBuiltins: true, // Optimizes React usage
                    },
                  },
                },
              },
            },
          ],
          include: path.resolve(__dirname, 'src'), // Make sure it includes your source folder
        },
        {
          test: cssRegex,
          exclude: cssModuleRegex,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: cssModuleRegex,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            'postcss-loader',
          ],
        },
        {
          test: sassRegex,
          exclude: sassModuleRegex,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: sassModuleRegex,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: stylRegex,
          exclude: stylModuleRegex,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader'],
        },
        {
          test: stylModuleRegex,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            'postcss-loader',
            'stylus-loader',
          ],
        },
        {
          test: lessRegex,
          exclude: lessModuleRegex,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
          sideEffects: true,
        },
        {
          test: lessModuleRegex,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            'postcss-loader',
            'less-loader',
          ],
        },
        {
          test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
  }
}
