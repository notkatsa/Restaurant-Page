const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        structure: './src/structure.js',
        home: './src/home.js',
        menu: './src/menu.js',
        contact: './src/contact.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    }
};