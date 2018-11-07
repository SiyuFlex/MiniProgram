//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '这是第一个Demo',
    color: "red",
    msg: "这是一个msg",
    testid: "1001",
    flag: "true",
    unflag: "false",
    a: 1,
    b: 2
  },
  onLoad: function(){
    // other.js
    var appInstance = getApp()
    console.log(  ) // I am global data
    this.setData({
      motto: 'On loading Page"index.js" parameter motto has been changed'
    });
  }
})
