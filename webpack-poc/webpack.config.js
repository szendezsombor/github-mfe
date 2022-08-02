const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    devtool: "inline-source-map"
}
