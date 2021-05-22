// pages/third/third.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths:'',
    tempFilePaths1:'',
    tempFilePaths2:'',
    tempFilePaths64:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var tempFilePaths1= options.tempFilePaths1;
    var tempFilePaths2= options.tempFilePaths2;
    that.setData({
      tempFilePaths1:tempFilePaths1,
      tempFilePaths2:tempFilePaths2,
    })

   
    
    var img1=wx.getFileSystemManager().readFileSync(tempFilePaths1, "base64");
    var img2=wx.getFileSystemManager().readFileSync(tempFilePaths2, "base64");
    
    
    wx.request({
     url: 'http://127.0.0.1:5000/score',                  //传输地址 即服务器地址
     //url:'http://3z60v38970.qicp.vip/score',
      data: {
        temp1:JSON.stringify(img1),
        temp2:JSON.stringify(img2),
        
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'chartset': 'utf-8'
      },
      success(res){
        console.log("处理后图片已获取"),
      that.setData({
        tempFilePaths64:res.data
      })         
      },
        
      
    
    })
    
  },
    

  

  save:function(){
    var that=this;
    var save = wx.getFileSystemManager();
    var tempFilePaths64=that.data.tempFilePaths64;
    var number = Math.random();
    save.writeFile({
      filePath: wx.env.USER_DATA_PATH + '/pic' + number + '.png',
      data: tempFilePaths64,
      encoding: 'base64',
      success: res => {
        wx.saveImageToPhotosAlbum({
          filePath: wx.env.USER_DATA_PATH + '/pic' + number + '.png',
          success: function (res) {
            wx.showToast({
              title: '保存成功',
            })
          },
          fail: function (err) {
            console.log(err);
            wx.getSetting({
              success(res) {
                if (!res.authSetting['scope.writePhotosAlbum']) {
                  wx.showToast({
                    title: '请在右上角设置进行授权',
                    icon:'none'
            })
                }
              }
            })
          }
        })
        console.log(res)
      }, fail: err => {
        console.log(err)
      }
    })

/*
    var tempFilePath2=that.data.tempFilePaths;
            wx.saveImageToPhotosAlbum({
              filePath:tempFilePath2 ,
              fail(){
                wx.getSetting({
                  success(res) {
                    if (!res.authSetting['scope.writePhotosAlbum']) {
                      wx.showToast({
                        title: '请在右上角设置进行授权',
                        icon:'none'
                })
                    }
                  }
                })
                  }
                  })
                  */
              }

,
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