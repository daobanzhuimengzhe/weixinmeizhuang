// pages/second/second.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background0:'',
    tempFilePaths2: '',
    tempFilePaths1: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var tempFilePaths1= options.tempFilePaths1;
    //console.log(options);
    that.setData({
      tempFilePaths1:tempFilePaths1

    })
    wx.request({
      //url:'http://3z60v38970.qicp.vip/background',
      url: 'http://127.0.0.1:5000/background',
      data: {
        background:JSON.stringify("3"),
        
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'chartset': 'utf-8'
      },
      success(res){
        console.log("second界面背景已加载"),
      that.setData({
        background0:res.data
      })         
      }
    })
  },
  chooseimage1: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: [ 'album'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          tempFilePaths2:res.tempFilePaths
        })
      }
    })
  },
  chooseimage2: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: [ 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          tempFilePaths2:res.tempFilePaths
        })
      }
    })
  },
  passtempFilePaths:function (){
    
    var that=this;
    var tempFilePaths1=that.data.tempFilePaths1;
    var tempFilePaths2=that.data.tempFilePaths2;
   
    
   
    if(tempFilePaths2==''){
      wx.showToast({ 
        title: '未选择图片',
        icon:'none'
        })
      return;
    }
    
   
    wx.navigateTo({
      
       
  		url: "../third/third?tempFilePaths1="+tempFilePaths1+"&tempFilePaths2="+tempFilePaths2,
	})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})