const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react', // JSX syntax feldolgozásért felelős preset
                            '@babel/preset-env', // ES5-2022-ig böngésző kompatibilitásért felel
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime', // async await syntax miatt nem dob errort, egyéb böngészős dolgok miatt sem
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
}
