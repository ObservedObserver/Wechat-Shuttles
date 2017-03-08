var util = require('../../utils/util.js');
var app=getApp();
Page({
  data: {
    logs: [],
    ticket:{},
    order:{},
    userInfo:{},
    icolor:['rgba(255,255,255,0.6)','rgba(255,255,255,0.6)','rgba(255,255,255,0.6)']
  },
  primary: function(event){
    var that = this;
    //调用应用实例的方法获取全局数据
    if(that.data.order.name=='')
    {
      wx.showModal({
            title: '姓名错误',
            content: '请检查您的姓名',
        });
    }
    else if(/^1[5-9][0-9]{6}$/.test(that.data.order.sid)==false)
    {
      wx.showModal({
            title: '学号错误',
            content: '请检查您的学号',
        });
    }else if(/^1[0-9]{10}$/.test(that.data.order.phone)==false)
    {
       wx.showModal({
            title: '电话错误',
            content: '请检查您的手机号码',
        });
    }else{
      app.getUserInfo(function(userInfo){
          //更新数据
          that.setData({
            userInfo:userInfo
          })
        });
        wx.request({
          url: 'http://localhost/wxtour',
          data: {
            info:{
                qid:'create_bill',
                userInfo:that.data.userInfo,//userinfo cannot send to the server?
                ticketInfo:that.data.ticket,
                orderInfo:that.data.order
            }
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
              wx.showToast({
                  title: '出票成功',
                  icon: 'success',
                  duration: 3000,
                  success:function(){
                    wx.redirectTo({
                      url: '../index/index'
                    });
                  }
              });
          },
          fail: function() {
            wx.showModal({
                title: '出票失败',
                content: '服务器已炸，请联系管理员',
                success: function(res) {
                  if (res.confirm) {
                    wx.redirectTo({
                    url: '../index/index'
                    });
                  }
                }
            });
          },
          complete: function() {
            // complete
          }
        });
    }
  },
  inputName:function(event){
    this.setData({
      "order.name":event.detail.value
    });
  },
   inputSid:function(event){
    this.setData({
      "order.sid":event.detail.value
    });
    if(/^1[5-9][0-9]{6}$/.test(this.data.order.sid)==false)
    {
      this.setData({
        "icolor[1]" : "#ff4081"
      });
    }
    else
    {
      this.setData({
        "icolor[1]" : "rgba(255,255,255,0.6)"
      });
    }
  },
   inputPhone:function(event){
    this.setData({
      "order.phone":event.detail.value
    });
    if(/^1[0-9]{10}$/.test(this.data.order.phone)==false)
    {
      this.setData({
        "icolor[2]" : "#ff4081"
      });
    }
    else
    {
      this.setData({
        "icolor[2]" : "rgba(255,255,255,0.6)"
      });
    }
  },
  onLoad: function (options) {
    var tmp=JSON.parse(options.ticket);
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      }),
      ticket:tmp
    });
  }
})
