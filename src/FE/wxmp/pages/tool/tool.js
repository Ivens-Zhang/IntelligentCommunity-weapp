// pages/tool/tool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 
   * @param {*} options 
   */
  getFaceInfo() {
    wx.chooseImage({
      success: res => {
        wx.getFileSystemManager().readFile({
          filePath: res.tempFilePaths[0], //选择图片返回的相对路径
          encoding: 'base64', //编码格式
          success: res => { //成功的回调
            let faceBase64 = res.data
            wx.request({
              url: 'http://172.16.11.51:3000/matchFace',
              method: 'POST',
              data: {
                x: faceBase64
              },
              success(res) {
                let userInfo = res.data.result.user_list[0]
                console.log(userInfo);
                if (userInfo.score >= 88) {
                  wx.showToast({
                    title: '人脸验证成功',
                    icon: 'success',
                    duration: 5000
                  })
                } else {
                  wx.showToast({
                    title: '人脸验证失败',
                    icon: 'loading',
                    duration: 2000
                  })
                }
              }
            })
          }
        })
      }
      // success: function(res) {
      //   console.log(wx.getFileSystemManager().readFileSync(res.tempFilePaths[0], "base64"))
      // },
    })
  },

  /**
   * 点击文章标题跳转至详情
   */
  jump: function (e) {  
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: `../yellowPage/yellowPage`,
      success: function(res) {
      },
      fail: function(res) {
    
      },
      complete: function(res) {
    
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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