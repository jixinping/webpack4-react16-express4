1.项目目录
├── package-lock.json
├── package.json
├── client  前端开发所属文件夹
│   ├── css  前端css存放目录
│   │   └── Home.css  示例css文件
│   ├── images  前端图片存放目录
│   │   └── 6165847895E8568AE73E6164F3668271B78151E6C.jpg  示例图片
│   ├── js  前端js目录
│   │   └── entry.js  前端入口js
│
├── public  后端开发所属文件夹
│   ├── client  前端文件打包后存放目录
│       ├── images  前端图片打包存放目录
│       ├── js 前端js打包存放目录
│   ├── api  后端api接口目录
│       └── Process.js 示例api接口
│   ├── config  后端配置文件目录
│       └── oracleConfig.js oracle数据库配置文件
│   ├── js  后端一般性代码目录
│       └── OracleOperater.js oracle数据库操作文件
│   ├── test  后端测试性代码目录
│       └── OracleTest.js oracle数据库操作测试文件
│   ├── view  后端页面目录
│       └── index.ejs 后台服务器挂载前端页面入口
│
├── routes  后端路由文件目录
│   └── index.js  后端路由配置文件
└── webpack.config.js  webpack打包配置文件
└── logConf.json  后端日志配置文件

2.项目使用
前端打包命令：npm run client-build
前端服务启动命令：npm run client （访问端口8080,前端为热加载模式，修改后页面直接体现）
后端服务热加载启动命令：npm start（访问端口3000，后端服务会自动挂载前端打包后的页面）
后端服务热加载debug模式启动命令：npm debug（访问端口3000，后端服务会自动挂载前端打包后的页面）

3.注意事项
需要预先安装oracleclient