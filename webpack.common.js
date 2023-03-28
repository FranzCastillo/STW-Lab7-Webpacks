const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        index: './src/index/index.js',
        sin_direccion: './src/sin-direccion/sin_direccion.js',
        populares: './src/populares/populares.js',
        nuevos: './src/nuevos/nuevos.js',
        bus: './src/historia/bus/bus.js',
        car: './src/historia/car/car.js',
        inicio: './src/historia/inicio/inicio.js',
        book: './src/components/book/book.js',
        menu: './src/components/menu/menu.js',
        story: './src/components/story/story.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]",
                        outputPath: "imgs/",
                    }
                }
            }
        ],
    },
};
