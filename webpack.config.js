var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        // 'react-hot-loader/patch',
        // 'webpack-dev-server/client?http://localhost:3000',
        // 'webpack/hot/only-dev-server',
        // 'babel-polyfill',
        path.join(__dirname, 'app/index.js')
    ],
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        publicPath:'/'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.tpl.html',
            inject: 'body',
            filename: './index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('development')
        })
    ],
    module: {
        loaders:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:"babel-loader",
                query:{
                    presets:['react','es2015']
                }
            },
            {
                test:/\.css$/,
                loader:"style!css"
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
            // {
            //     test: /\.jsx?$/,
            //     // exclude: /node_modules/,
            //     // 在这里添加 react-hot，注意这里使用的是loaders，所以不能用 query，应该把presets参数写在 babel 的后面
            //     loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015']
            // }
        ]
    }
}