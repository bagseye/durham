const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


// I/O path settings
const rootOutputPath = path.resolve(__dirname, 'dist');
const outputPaths = {
  js: 'resources/js',
  css: 'resources/css',
  images: 'resources/images',
  video: 'resources/video',
  // fonts: 'resources/fonts',
};

const inputPaths = {
  images: 'src/images/',
  video: 'src/video/',
  // fonts: 'src/fonts/',
}

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        app: './src/entries/app.entry.js',
    },
    plugins: [
        new CleanWebpackPlugin(
          {
            cleanOnceBeforeBuildPatterns: [
              `${rootOutputPath}/${outputPaths.js}`,
              `${rootOutputPath}/${outputPaths.css}`,
              `${rootOutputPath}/${outputPaths.images}`,
              `${rootOutputPath}/${outputPaths.video}`,
            ],
            verbose: false,
            dry: false,
          },
        ),
        new MiniCssExtractPlugin({
          filename: `${outputPaths.css}/[name].bundle.css`,
        //   chunkFilename: `${outputPaths.css}/vendors.bundle.css`,
          ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: inputPaths.images,
              to: outputPaths.images,
            },
            {
              from: inputPaths.video,
              to: outputPaths.video
            }
          ]
        }, {
          ignore: ['.keep', '.DS_Store'],
        }),
    ],
    output: {
        filename: `${outputPaths.js}/[name].bundle.js`,
        path: rootOutputPath,
        publicPath: 'http://localhost:4040/',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            commons: {
              chunks: 'initial',
              name: 'commons',
              minChunks: 2,
              minSize: 0,
            },
            defaultVendors: {
              test: /[\\/](node_modules|src\/vendor)[\\/]/,
              name: 'vendors',
              chunks: 'all',
              minChunks: 2,
              priority: 10,
              enforce: true,
            },
          },
        },
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                './src/scss/settings/*.scss',
                                './src/scss/tools/**/*.scss',               
                            ],
                        },
                    },
                ],
            },
        ],
    },
};