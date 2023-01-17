'use strict'

module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    indexPath: 'index.html',
    devServer: {
        host: '127.0.0.1',
        port: 80,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8081', //代理的服务器，也就是api要访问的服务器，这里写真实的请求url
                ws: true,    //是否启用websockets
                changOrigin: true, //true，将主机头的来源更改为目标URL，也就是是否允许跨域。开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {    //重写代理路径
                    '^/api': ''
                }
            },
            '/test': {
                target: 'http://127.0.0.1:8082',   //这里写真实的请求url
                ws: true,    //是否启用websockets
                changOrigin: true, //允许跨域 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {    //重写代理路径
                    '^/test': ''
                }
            }
        }
    }
}
