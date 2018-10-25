module.exports = {
    entry:__dirname+'/client/js/entry.js', //入口文件
    output:{
        publicPath:__dirname+"/public/client/js",//必须加publicPath
        //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径
        path:__dirname+"/public/client/js", //输出位置
        filename:'main.js' //输入文件
    },
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