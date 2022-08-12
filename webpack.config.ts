// Dependencies
// @ts-ignore
import path from 'path'
import {Configuration} from 'webpack'

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// Environment
const isProduction = process.env.NODE_ENV === 'production'

const webpackConfig: Configuration = {
    devtool: !isProduction ? 'source-map' : false,
    target: 'web',
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'assets'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
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
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                },
            },
            {
                test: /\.(scss|css|less)$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ]
    },
    optimization: {
        splitChunks: {
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
    plugins: [
        new BrowserSyncPlugin(
            {
                proxy: 'http://localhost:8101',
                files: [
                    {
                        match: [
                            '**/*.php'
                        ],
                        fn: function (event, file) {
                            if (event === "change") {
                                const bs = require('browser-sync').get('bs-webpack-plugin');
                                bs.reload();
                            }
                        }
                    }
                ]
            }
        ),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css",
        })
    ]

}
export default webpackConfig