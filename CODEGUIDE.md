## 编码规范简述。
>已配置eslint，大部分不规范的代码会报错。

1. 代码缩进 4空格
2. 必写注释 每个方法必须写注释，写明用途，也方便其他人维护，
3. 最小功能提交，完成一个小功能功能就要提交合并代码（提交，拉取，推送）。
4. 使用sorcetree的工作流进行分支管理，每次新建功能，都本地新建分支，改完再合并到develop分支上推送。


5. 明确src下每个文件夹的用途，对应代码写到对应地方，不到处处理
 * api          放置所有api地址以及回调方法封装
 * assets       放置图片文件
 * components   放置vue的组件
 * enums        放置枚举
 * filters      放置vue filters
 * mixins       放置vue mixins
 * pages        所有页面
 * routers      定义路由
 * scss         放置样式
 * settings     比如全局懒加载默认图，加载中图，全局域名，全局图片裁剪比例，全局日志配置
 * utils        拓展方法及函数，ajax封装，提示语资源文件
 * vuexs        vuexs状态管理

6. 所有的class使用 `demo-list` 形式, class名使用"-"分隔。
7. 所有变量使用小驼峰命名，`demoListBox`形式，首字母小写。


8. 所有css，需再.vue中写style标签，声明`lang=scss`, 使用`@import '~scss/'` 引用，这种引用webpacke的autoprefix才会处理。
9. 已经在`webpack.base.conf`中声明src中所有路径的别名.
 * 在scss中使用路径别名是`~/scss`, 
 * js中直接使用`import demo from 'components'`,
 * 在.vue页面中使用，原生属性`src="~assets/logo.png"`,自定义属性`v-lazy="{src: require('assets/logo.png')}"`
10. 所有图片采用懒加载。详细用法参考[https://github.com/hilongjw/vue-lazyload](https://github.com/hilongjw/vue-lazyload)

11. 所有项目使用同一套 封装的预定义class文件，比如  `.pr10{padding-right: 10px};`, 定义在defined.scss;
12. 统一字体大小规范 规定常用字体大小变量，不允许自己定义比如  `$font-min: 12px; $font-small: 14px,font-normal: 16px;`;(大于18px不限), 定义在var.scss;
13. 统一SCSS mixins,封装常用scss函数,比如  `clearfix,     .home{width: 100px; @include clearfix();}`,定义在mixins.scss;
14. 颜色部分尽量使用变量,比如白色字体  `$font-white: #fff;  .home{color: $font-white;}` 定义在var.scss;

其他参考腾讯前端规范[http://alloyteam.github.io/CodeGuide/](http://alloyteam.github.io/CodeGuide/)
