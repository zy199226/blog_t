const path = require('path');
// const webpack = require('webpack');


module.exports = {
    entry: {
        index: `${__dirname}/src/index.js`
    },

	// entry: path.resolve(__dirname, '/index.js'),

	// 入口文件输出配置
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },

    devtool: 'eval',

    devServer: {
        contentBase: './',
        hot: true,
        port: 8888,
        inline: true,
        open: true
    },

    module: {
		// 加载器配置
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'url-loader?limit=8192&name=[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader?limit=8192&name=[name].[ext]'
            }
        ]
    }

};
