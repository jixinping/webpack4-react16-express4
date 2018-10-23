var path = require('path');

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
    }
}