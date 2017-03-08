// pages/mybill/mybill.js
var util = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    mybill: [],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showmybill: function(){
    wx.navigateTo({
      url: '../mybill/mybill'
    });
  },

  
  onLoad: function () {
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
    wx.request({
      url: 'http://localhost/wxtour',
      data: {
        //qid: 'getList',
        info: {
          qid: 'get_mybill',
          nickName: that.data.userInfo.nickName
        }
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        that.setData({
          mybill:res.data
        });
        //console.log(that.data.mybill);
      },
      fail: function() {
        console.log("fail");
      },
      complete: function() {
        // complete
      }
    })
  }
})
