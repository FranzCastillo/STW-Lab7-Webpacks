const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html', // The name that the exported file will have
            template: './src/index/index.html',
            // common → entries
            chunks: ['menu', 'index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'libros-populares.html',
            template: './src/populares/libros-populares.html',
            chunks: ['populares', 'menu', 'book'],
        }),
        new HtmlWebpackPlugin({
            filename: 'nuevos-lanzamientos.html',
            template: './src/nuevos/nuevos-lanzamientos.html',
            chunks: ['nuevos', 'menu', 'book'],
        }),
        new HtmlWebpackPlugin({
            filename: 'sin-direccion.html',
            template: './src/sin-direccion/sin-direccion.html',
            chunks: ['sin_direccion'],
        }),
        new HtmlWebpackPlugin({
            filename: 'bus.html',
            template: './src/historia/bus/bus.html',
            chunks: ['bus', 'story']
        }),new HtmlWebpackPlugin({
            filename: 'car.html',
            template: './src/historia/car/car.html',
            chunks: ['car', 'story']
        }),new HtmlWebpackPlugin({
            filename: 'inicio.html',
            template: './src/historia/inicio/inicio.html',
            chunks: ['inicio', 'story']
        })
    ],
});
