const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/electron.ts',
    target: 'electron-main',
    resolve: {
        alias: {
            ['@']: path.resolve(__dirname, 'src')
        },
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            include: /src/,
            use: [{ loader: 'ts-loader' }]
        }]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'electron.js'
    }
}