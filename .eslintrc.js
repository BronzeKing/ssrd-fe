// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    
    // 自定义添加
    /**
     * "off" 或 0 - 关闭规则
     * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
     * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */

    // 缩进设置 http://eslint.org/docs/rules/indent "SwitchCase" (默认：0) 强制 switch 语句中的 case 子句的缩进水平
    'indent': ['error', 4, { "SwitchCase": 1 }],
    //语句强制分号结尾
    'semi': [2, 'always'],
    // 禁止使用多个空格
    'no-multi-spaces': 0,
    // 禁止出现未使用过的变量
    "no-unused-vars": 0,
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    "key-spacing": 0,
    // 禁用 console
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 强制在圆括号内使用一致的空格
    'space-in-parens': [ 2, 'never' ]
  }
}
