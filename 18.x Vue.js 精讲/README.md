# 18.x Vue.js 精讲

>地址：http://biaoyansu.com/18.x<br>
>讲师：表严肃

## 18.1 Vue 的安装及语法
Vue 的引入：通过 `<script>` 标签引入:

```html
<script src="./lib/vue.min.js"></script>    // 例如 18.1 中 Vue 的引入
```

基本模板：
```html

//main.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>18.1</title>
</head>
<body>
    <div id="app">
        <div>
            <input type="text" v-model="name">
            <span v-show="name">你的名字：{{name}}</span>
        </div>
        <div>
            <input type="text" v-model="singer">
            <span v-show="singer">你喜欢的歌手：{{singer}}</span>
        </div>
        <div>
            <input type="text" v-model="actor">
            <span v-show="actor" placeholder="你喜欢的演员...">你喜欢的演员：{{actor}}</span>
        </div>
    </div>

    <script src="./lib/vue.min.js"></script>
    <script src="./js/18.1.js"></script>
</body>
</html>


//main.js

var app = new Vue({
    el: '#app',
    data: {
        name: 'M',
        singer: 'IU',
        actor: null,
    }
});
```

在线效果：[codePen](https://codepen.io/magicmai/pen/jLoxJK?editors=1010)

## 18.2 v-for 指令

## 18.3 v-bind 指令

## 18.4 v-on 指令
`v-on:submit.prevent`：阻止提交的默认跳转行为

`v-on:submit.stop`：阻止提交

`v-on:` 可以替换成 `@`

## 18.5 v-model 指令
