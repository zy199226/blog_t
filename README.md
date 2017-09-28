# 项目简介
写这个博客（相当简陋的客户端）的最主要目的是使用一下 nodejs，之所以用 vue 来写前端界面，因为简单和快。<br>
最终目的基本达到，用 node 实现了登录、注册、发布话题等功能。<br>
数据库使用的是 MongoDB，选择这个是因为好像有免费的云服务可以使用，最终也没用上，因为有其他的事情处理，所以这个项目就先告一段落。<br>
这个项目没有用 express mongoose 等也许很好用的类库，我认为用原生的会对自己更有好处，毕竟自己的东西才是最好的，当然我也并不反对使用这些来提高开发效率。

## 功能
- 登录
- 注册
- 发布话题
- 话题列表
- 预览话题

## 运用的技术有：
- 前端界面有 vue + vue-router + vuex + less + axios
- mavon-editor 编辑器
- 后端 nodejs <br>
使用 cluster 模块进行负载均衡<br>
使用 mongodb 来连接数据库
- 数据库 MongoDB

## 预览
因为要忙其他的事情，暂时没空搞服务器的事情，所以暂时也没有预览，之后有空了应该会补上！先看图片吧
![]()


## 运行项目
运行项目之前，你还需要安装 MongoDB 并启动。<br>
因为前后端分离，所以前后端需要分别启动。（我也不知道我这样处理对不对，以后再好好学习改进吧）
```
git clone https://github.com/zy199226/blog_t.git
cd blot_t
npm install webpack-dev-server webpack -g (没有安装webpack的需要安装)
npm install
node ./server/index (需要先启动 node 服务，)
npm start
```
