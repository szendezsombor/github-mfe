const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/index',
            },
            // Minden ami ide be kerül az async módon töltődik be innentől kezdve. Az az ha nincs bootstrap eltörik.
            shared: ['faker']
        }),
    ],
};
