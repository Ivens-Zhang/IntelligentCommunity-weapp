// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    article: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    this.setData({
      id: options.id,
    });
    wx.request({
      url: 'http://172.16.11.51:3000/FindarticleByID',
      data: {
        articleID: _this.data.id
      },
      success(res) {
        console.log(res);
        _this.setData({
          article: res.data
        })
        console.log(_this.data.article);
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