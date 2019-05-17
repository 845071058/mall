// pages/home/home.js
const ajax = require('../../utils/ajax.js');
const utils = require('../../utils/util.js');
var sectionData = [];
var ifLoadMore = null;
var page = 1;//默认第一页
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbars: null,
    currentTab: 0,
    banners: [{
      "url": "http://192.168.5.6:9999/images/201905171558069462755264.jpg"
    }, {
        "url": "http://192.168.5.6:9999/images/201905171558069462910094.jpg"
    }],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    menus: null,
    brands: null,
    hidden: false,
    bnrUrl: [{
      "url": "http://192.168.5.6:9999/images/201905171558055485371421.jpg"
    }, {
        "url": "http://192.168.5.6:9999/images/201905171558055501554693.jpg"
    }]

  },
})