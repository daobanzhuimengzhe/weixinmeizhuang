// pages/forth/forth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    acc_nbr:'我是赵云龙',
    theimg:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var img1;

    img1=wx.getFileSystemManager().readFileSync('image/thebeauty1.png', "base64");
    that.setData({
      theimg:img1
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

  myup:function(){
    var that=this;

    var acc_nbr=that.data.acc_nbr;
    var img1=that.data.theimg;
    console.log(acc_nbr);
wx.request({
  url: 'http://127.0.0.1:5000/score',
  
  data: {
    acc_nbr:JSON.stringify(acc_nbr),
    theimg:JSON.stringify(img1),
    
  },
  method: "POST",
  header: {
    'content-type': 'application/x-www-form-urlencoded',
    'chartset': 'utf-8'
  }

})
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