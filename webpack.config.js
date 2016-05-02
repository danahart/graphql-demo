var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/js/app.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/bundle.js'
    },
    resolve: {
        modulesDirectories: ['client', 'node_modules']
    },
    plugins: [
        new ExtractTextPlugin('css/bundle.css'),
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            inject: false,
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'client')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=10000&hash=sha512&digest=hex&name=images/[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
            }

        ]
    },
    postcss() {
      return [
        require('postcss-import')({ addDependencyTo: webpack }),
        require('postcss-url')(),
        require('precss')({'import': {disable: true}}),
        require('autoprefixer')({ browsers: ['last 2 versions'] })
      ];
    }

};
