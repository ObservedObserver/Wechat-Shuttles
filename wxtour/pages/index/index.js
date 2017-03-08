//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    product: [],
    tmp:{}
  },
  //事件处理函数
  bindViewTap: function(event) {
    var that = this;
    var ticket=that.data.product[event.currentTarget.dataset.ind];
    //app.globalData.billid=ticket;
    //app.billid=ticket;

    ticket=JSON.stringify(ticket);

    //console.log(ticket);
    wx.navigateTo({
      url: '../logs/logs?billid='+ticket
    })
  },
  showmybill: function(){
    wx.navigateTo({
      url: '../mybill/mybill'
    });
  },

  
  onLoad: function () {
    console.log('onLoad');
    //console.log(this.data.motto);
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
  //   wx.getUserInfo({
  // success: function(res) {
  //   var userInfo = res.userInfo
  //   var nickName = userInfo.nickName
  //   var avatarUrl = userInfo.avatarUrl
  //   var gender = userInfo.gender //性别 0：未知、1：男、2：女 
  //   var province = userInfo.province
  //   var city = userInfo.city
  //   var country = userInfo.country
  //   console.log(res);
  // }
// })
    // console.log(that.data.userInfo);
    wx.request({
      url: 'http://localhost/wxtour',
      data: {
        //qid: 'getList',
        info: {
          qid: 'getList'
        }
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        //console.log(res.data);
        that.setData({
          product:res.data
        });
        //console.log((that.data.product));
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
