/*
 * @Author       : Ivens
 * @Date         : 2020-03-26 11:02:43
 * @LastEditTime : 2020-05-20 16:18:03
 * @LastEditors  : Ivens
 * @Description  : 
 * @FilePath     : \IntelligentCommunity-weapp\src\FE\wxmp\pages\index\index.js
 */
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testStr: 'test',
    imgUrls: ['https://icimg.oss-cn-shanghai.aliyuncs.com/poster/d.jpg','https://icimg.oss-cn-shanghai.aliyuncs.com/poster/b.jpg','https://icimg.oss-cn-shanghai.aliyuncs.com/poster/a.jpg','https://icimg.oss-cn-shanghai.aliyuncs.com/poster/c.jpg'],
    weather: {},
    article: []
    // article: [
    //   {
    //     title : '保护好中小投资者 业内专家详解新证券法诸多亮点',
    //     posterURL: 'http://p1.pstatp.com/large/pgc-image/Rtklo17GHkKFja'
    //   },
    //   {
    //     title : '吸烟的人，多长时间肺会变黑？如果戒烟，肺还能不能恢复如初？',
    //     posterURL: 'https://imgm.gmw.cn/attachement/jpg/site215/20200309/5077618760660532724.jpg'
    //   },
    //   {
    //     title : '北京：玉渊潭公园樱花怒放迎来盛放期',
    //     posterURL: 'http://p1.pstatp.com/large/pgc-image/RuOTPtwDu1OTsa'
    //   },
    //   {
    //     title : '保护好中小投资者 业内专家详解新证券法诸多亮点',
    //     posterURL: 'http://p1.pstatp.com/large/pgc-image/Rtklo17GHkKFja'
    //   },
    //   {
    //     title : '吸烟的人，多长时间肺会变黑？如果戒烟，肺还能不能恢复如初？',
    //     posterURL: 'https://imgm.gmw.cn/attachement/jpg/site215/20200309/5077618760660532724.jpg'
    //   },
    //   {
    //     title : '北京：玉渊潭公园樱花怒放迎来盛放期',
    //     posterURL: 'http://p1.pstatp.com/large/pgc-image/RuOTPtwDu1OTsa'
    //   }
    // ]
  },

  /**
   * 获取今明天气
   */
  getWeatherData: function () {
    var _this = this
    wx.request({
      url: `https://free-api.heweather.net/s6/weather/forecast?location=昆山&key=29e2c414b69146e185d8947bd5f97abe`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        _this.setData({
          weather: res.data.HeWeather6[0].daily_forecast
        })
        console.log(res.data.HeWeather6[0].daily_forecast);
      }
    })
  },

  /**
   * 点击文章标题跳转至详情
   */
  jump: function (e) {  
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: `../article/article?id=${e.currentTarget.dataset.id}`,
      success: function(res) {
      },
      fail: function(res) {
    
      },
      complete: function(res) {
    
      },
    })
  },

  /**
   * 获取文章列表
   */
  getArticles: function () {
    var _this = this
    wx.request({
      url: 'http://172.16.11.51:3000/articleList',
      success(res) {
        console.log(res);
        _this.setData({
          article: res.data
        })
      }
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
    this.getWeatherData()
    this.getArticles()
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