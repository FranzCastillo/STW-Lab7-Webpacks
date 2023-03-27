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
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs",
                    }
                }
            }
        ],
    },
};
