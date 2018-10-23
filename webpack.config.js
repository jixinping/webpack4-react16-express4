var path = require('path');
var proxy = require('http-proxy-middleware')

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets:['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules"
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                loader: "file-loader"
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: '8080',
        proxy: [
            {
                context: 'api/',
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false
            }
        ]
    }
}