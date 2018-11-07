//app.js
App({
  onLaunch: function (options) {
    // Do something initial when launch.
    console.log("Event onlaunch trigged");
  },
  onShow: function (options) {
    // Do something when show.
    console.log("Event onshow trigged");
  },
  onHide: function () {
    // Do something when hide.
    console.log("Event onHide trigged");
  },
  onError: function (msg) {
    console.log(msg)
  },
  globalData: 'I am global data',
  courseName: 'lsiy learning on IMOOC'
})