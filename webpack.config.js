// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimiserWebpackPlaguin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

//require('dotenv').config()

const isProduction = process.env.NODE_ENV === 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const plugins = [
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                collapseWhitespace: isProduction,
                removeComments: isProduction,
            }
        }),
        /* new DefinePlugin({
            'process.env': JSON.stringify(process.env)
        }), */
        new MiniCssExtractPlugin({
            filename: isProduction ? '[name].[contenthash].css' : '[name].css',
            chunkFilename: isProduction ? '[id].[contenthash].css' : '[name].css'
        })
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
]

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: isProduction ? '[name].[contenthash].js' : '[name].js',
        assetModuleFilename: 'public/[name].[contenthash].[ext][query]',
        clean: true,
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            "@": path.resolve(__dirname, 'src'),
        }
    },
    devtool: isProduction ? false : 'source-map',
    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, 'public'),
          },
        compress: true,
        port: 9000,
        historyApiFallback: true,
        hot: true,
    },
    optimization: {
        minimize: isProduction,
        minimizer: [
            new CssMinimiserWebpackPlaguin(),
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    format: {
                        comments: false,
                    }
                }
            })
        ]
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
            {
                test: /\.module\.s[ac]ss$/i,
                use: [
                    stylesHandler, 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]_[hash:base64:7]'
                            }
                        }
                    }, 
                    'postcss-loader', 
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                ],
            },
            {
                test: /^((?!\module).)*s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset/resource',
                //было просто assets
            },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
