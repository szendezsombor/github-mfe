const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/bootstrap',
            },
            // Minden ami ide be kerül az async módon töltődik be innentől kezdve. Az az ha nincs bootstrap eltörik.
            // Ha a shared-ek között a major verzió eltérő, akkor lehúzza a kettő különböző verziót
            // Ha a shared dependenciák fő verziója egyezik akkor egy példányt húz belőlük (network)
            // A singletonal szabályozhatjuk hány példány létezzen
            shared: [{
                faker: {
                    singleton: false,
                    // singleton: true, // Csak 1 példány lehet belőle
                    // Amennyiben eltérőek a fő verziók, de singleton a példány akkor warningot kapunk
                    // WARN: Unsatisfied version 5.1.0 from products of shared singleton module faker (required ^4.1.0)
                }
            }],
        })
    ]
}
