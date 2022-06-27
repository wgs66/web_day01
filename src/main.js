// 轮播图逻辑
// console.log('实现轮播图的业务逻辑');
// tab栏切换的逻辑
// console.log('实现tabs标签页的逻辑');

import './banner.js';
import './tabs.js';

// 更新打包练习

import $ from 'jquery';

// 改变字体颜色
$('#swiper').css('color', 'red');

import './styles/index.css';
import './styles/index.less';

import imgUrl from './assets/1.gif';

let img = document.createElement('img');

img.src = imgUrl;

document.body.appendChild(img);

// ------------------------------------
import imgUrl1 from './assets/logo_small.png';

let img1 = document.createElement('img');

img1.src = imgUrl1;

document.body.appendChild(img1);

// 测试数据
//class App {
// static a = 123;
//}

//console.log(App.a);

import './assets/fonts/iconfont.css';

import { createApp } from 'vue';
import App from './app.vue';
const app = createApp(App);
app.mount('#app');
