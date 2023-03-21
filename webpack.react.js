const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/renderer.tsx',
    target: 'web',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist/'),
        compress: true,
        port: 9000
    },
    resolve: {
        alias: {
            ['@']: path.resolve(__dirname, 'src'),
            ['@/client']: path.resolve(__dirname, 'src/client')
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                include: /src/,
                use: [{ loader: 'ts-loader' }]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'renderer.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};