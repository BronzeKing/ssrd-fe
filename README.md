# ssrd-fe

> ssrd fe project

## 生成步骤

``` bash
# 安装依赖
npm i

# 运行开发环境 localhost:8090
npm run dev

# 运行生产编译
npm run build
```
## 项目结构
```
┌── src             		# main
│    ├── api 				# API接口地址以及获取数据函数
│    ├── assets     		# image source
│    ├── components 		# components
│    ├── configs      		# 该文件主要用来处理vue运行中所需js以及组件注册
│    ├── enums      		# 枚举相关文件
│    ├── filters      		# vue 全局filters
│    ├── mixins      		# vue多页面共用mixins
│    ├── pages      		# pages
│    ├── routers      		# vue-router前端路由
│    ├── scss               # scss
│    │    ├── font  		# iconfont
│    │    ├── base  		# 基础的全局scss变量以及全局css
│    │    ├── components  	# 组件相关样式，组件内单独引用
│    │    └── pages   		# 页面相关样式，页面内单独引用
│    │
│    ├── settings      		# 全局设置
│    ├── utils              # 扩展相关函数以及封装
│    ├── vuexs              # vuex数据流管理相关
│    │    └── modules   	# 按模块使用
│    │
│    ├── App.vue            # 入口
│    └── main.js            # 入口
│
├── node_modules    # 依赖
├── static          # 静态文件
├── dist            # 打包之后的文件
├── .babelrc        # babel config
├── .editorconfig	# 通用编辑器配置
├── .gitignore		# git忽略提交配置
├── .eslintignore   # 暂时添加了src/*,去掉了监控
├── .eslintrc.js    # eslint配置
├── .postcssrc.js   # postcss配置
├── index.html      # index入口文件
└── package.json    # package info
```