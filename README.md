# react-start

经过几次项目总结，整理出这份react脚手架，下载源码后


## 安装

```js

git clone  https://github.com/RaniHu/react-start.git

```


## 启动项目

```js

npm install          安装依赖               

npm run mock         启动模拟的接口服务         

npm start            本地启动项目

```

## 打包上线

```js
npm run build        压缩分离css,js,增加版本号,使用anujs代替react等

```


## 目录

```
--react-start

   |--build                               (项目打包输出目录)
       |--scripts                
       |--styles                 
       |--index.html　　
   |--app                                 (本地开发目录)
       |--components                      公共组件(只存放例如导航条头部等公共组件)
       |--fetch                           异步请求
       |--pages                           页面(具体拆分的每个页面)
       |--router                          路由配置
       |--static                          静态文件，css，js
       |--util                 
       |--index.jsx                       入口文件
       |--index.tmpl.html                 html模板
   |--mock                                模拟数据目录
       |--server.js                       启动端口，api地址配置

   |-- bundle.js                          开发环境下引用的文件，包括js和css
   |-- index.html                         开发环境下输出的html
   |-- package.json                       依赖
   |--.babelrc
   |--.eslintrc
   |--.gitignore
   |-- webpack.config.js                  本地配置
   |-- webpack.production.config.js       线上环境配置

   
```

## 功能及特点

- [x] 使用webpack作为构建工具，本地和线上两份配置文件
- [x] 使用koa进行后端接口模拟
- [x] 使用fetch获取数据，比jquery的ajax更轻量，支持原生promise
- [x] 线上环境使用anujs代替react，减小文件体积
- [x] 线上环境将第三方依赖单独打包，分离css和js并自动添加版本号，



## 关于koa模拟数据

模拟的接口存放在`./mock`目录下，接口文件为`./mock/server.js`，执行`npm run mock`即可启动模拟的接口服务，启动之后，找一个 get 的接口访问，例如`http://localhost:3000/api/1`即可获取相应数据。

### 使用 webpack-dev-server 的代理

我们配置koa接口的端口是3000，而我们项目的接口是8080，默认情况下会出现跨域的情况，所以我们使用webpack-dev-server 做一个代理的转发。

```js
    devServer: {
        proxy: {
          //此时 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上
          '/api': {
            target: 'http://localhost:3000',
            secure: false
          }
        },
    }
```

