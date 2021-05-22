// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: '',//界面跳转后 此路径对应图片应传送至后端
    background0:'',
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
          tempFilePaths:res.tempFilePaths
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
          tempFilePaths:res.tempFilePaths
        })
      }
    })
  },
  passtempFilePaths:function (){
    
    var that=this;
    var tempFilePaths1=that.data.tempFilePaths;
    //console.log(tempFilePaths1);
    if(tempFilePaths1==''){
      wx.showToast({ 
        title: '未选择图片',
        icon:'none'
        })
      return;
    }
    wx.navigateTo({
      
       
  		url: "../second/second?tempFilePaths1="+tempFilePaths1,
	})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
      //url:'http://3z60v38970.qicp.vip/background',
      url: 'http://127.0.0.1:5000/background',
      data: {
        background:JSON.stringify("2"),
        
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'chartset': 'utf-8'
      },
      success(res){
        console.log("first界面背景已加载"),
      that.setData({
        background0:res.data
      })         
      }
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