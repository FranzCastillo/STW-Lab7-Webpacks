const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist_con_babel'),
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].bundle.css',
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html', // The name that the exported file will have
                template: './src/index/index.html',
                // common → entries
                chunks: ['menu', 'index'],
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'libros-populares.html',
                template: './src/populares/libros-populares.html',
                chunks: ['populares', 'menu', 'book'],
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'nuevos-lanzamientos.html',
                template: './src/nuevos/nuevos-lanzamientos.html',
                chunks: ['nuevos', 'menu', 'book'],
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'sin-direccion.html',
                template: './src/sin-direccion/sin-direccion.html',
                chunks: ['sin_direccion'],
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'bus.html',
                template: './src/historia/bus/bus.html',
                chunks: ['bus', 'story'],
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                }
            }),new HtmlWebpackPlugin({
                filename: 'car.html',
                template: './src/historia/car/car.html',
                chunks: ['car', 'story'],
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                }
            }),new HtmlWebpackPlugin({
                filename: 'inicio.html',
                template: './src/historia/inicio/inicio.html',
                chunks: ['inicio', 'story'],
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                }
            }),
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
        }),
    ],
});
