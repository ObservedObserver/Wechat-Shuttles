//logs.js
var util = require('../../utils/util.js');
//var app = getApp();
Page({
  data: {
    logs: [],
    ticket:{},
  },
  primary: function(){
    var that = this;
      wx.navigateTo({
      url: '../bill/bill?ticket='+JSON.stringify(that.data.ticket)
    })
  }
  ,
  onLoad: function (options) {
     var tmp=JSON.parse(options.billid);
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      }),
      ticket:tmp
    });
    
  }
})
