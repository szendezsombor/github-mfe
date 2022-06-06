const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfiguration = require('./webpack.common');
const packageJsonDependencies = require('../package.json').dependencies;

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
            },
            // shared: ['react', 'react-dom'],
            shared: packageJsonDependencies,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
}

// A devConfig mivel 2. argumentum felül vághatja a commonConfigurationt
module.exports = merge(commonConfiguration, devConfig);
