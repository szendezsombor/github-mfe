const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfiguration = require('./webpack.common');
const packageJsonDependencies = require('../package.json').dependencies;

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
           name: 'marketing',
           filename: 'remoteEntry.js',
           exposes: {
               './MarketingApp': './src/bootstrap'
           },
            // shared: ['react', 'react-dom'],
            shared: packageJsonDependencies,
        }),
    ],
}

// A devConfig mivel 2. argumentum felül vághatja a commonConfigurationt
module.exports = merge(commonConfiguration, devConfig);
