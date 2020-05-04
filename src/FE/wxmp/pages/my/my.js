// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogined: false,
    userInfo: {}
  },

  createFaceInfo() {
    wx.chooseImage({
      success: res => {
        wx.getFileSystemManager().readFile({
          filePath: res.tempFilePaths[0], //选择图片返回的相对路径
          encoding: 'base64', //编码格式
          success: res => { //成功的回调
            let faceBase64 = res.data
            wx.request({
              url: 'http://192.168.3.41:3000/createFaceInfo',
              method: 'POST',
              data: {
                x: faceBase64
              },
              success(res) {
                console.log(res);
              }
            })
          }
        })
      }
    })
  },

  bindGetUserInfo(e) {
    this.setData({
      isLogined: true,
      userInfo: e.detail.userInfo
    })
    console.log(this.data.userInfo);
    wx.request({
      url: 'http://192.168.3.41:3000/createUser',
      method: 'POST',
      data: {
        x: e.detail.userInfo
      },
      success(res) {
        console.log(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
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