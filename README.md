```

## Installation

Install all dependencies. 

```
$ npm install
```


## Development

Builds the application and starts a webserver with livereload. The only thing you need to do is to run command `$ gulp` or `$ npm start`.

```
$ npm run dev 
```

## Build

Builds a minified version of the application in the dist folder.

```
$ npm run build
```

## Javascript

Javascript entry file: `src/scripts/main.js` <br />

**Vue**

https://vuefe.cn/guide/

**Vue-Router**

https://router.vuejs.org/zh-cn/index.html

**ES6 with babel**

We are working with the webpack [babel loader](https://github.com/babel/babel-loader) in order to load our .js/.jsx files. Babel allows you to use ES6 features like class, arrow functions and [much more](https://babeljs.io/docs/compare/).


**SCSS**

As you can see we are using stylus to preprocess our .scss files. If you didn't work with a css preprocessor before the [stylus page](http://learnboost.github.io/stylus/) is a good starting point to get to know what stylus can do for you.<br /><br />
If you want to use third-party CSS you just include it via `@import 'path/to/your/third-party-styles.css'` at the top of the main.scss file.


## Webpack Hints

You can find the webpack configuration in the [webpack.config.js file](./webpack.config.js).
We use the babel-loader in order to load .jsx and .js files via webpack. If it's possible install all your dependencies with NPM. Packages installed with NPM can be used like this:

```language-javascript

var moduleXYZ = require('moduleXYZ');

```
You can find all loaders in this [list](http://webpack.github.io/docs/list-of-loaders.html).


//接口没问题 撸起！！！
###Requirements
* node
* npm
* webpack
* vue
2017.2.5
接口调通，新增若干功能页面。
下一步优化UI，添加微信接口，编写vue 组件
2017.2.7
绑卡界面 弹框等完成
科室信息列别表完成
2017.2.9
医生值班组件
个人信息组件
常用就诊人组件 完成
2017.2.17
添加多个组件改了那么多为什么不变绿NND 找不到组织了
