// pages/after/after.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buyarray: ['请选择','淘宝网', '官网', '京东商城', '孩子王', '线下商店'],
    objectArray: [
      { id: 0, name: '请选择' },
      { id: 1, name: '淘宝网' },
      { id: 2, name: '官网' },
      { id: 3, name: '京东商城' },
      { id: 4, name: '孩子王' },
      { id: 5, name: '线下商店' }
    ],
    buyindex: 0,
    companyarray: ['请选择','联邦', '顺风', '申通', '韵达', '中通', 'EMS', '京东', '圆通', '天天', '优速', '百世', '速尔'],
    objectArray: [
      { id: 0, name: '请选择' },
      { id: 1, name: '联邦' },
      { id: 2, name: '顺风' },
      { id: 3, name: '申通' },
      { id: 4, name: '韵达' },
      { id: 5, name: '中通' },
      { id: 6, name: 'EMS' },
      { id: 7, name: '京东' },
      { id: 8, name: '圆通' },
      { id: 9, name: '天天' },
      { id: 10, name: '优速' },
      { id: 11, name: '百世' },
      { id: 12, name: '速尔' },
    ],
    companyindex: 0,
    date: '请选择'
  },
  /**
   * 购买渠道
   * value是值 picker中的value属性值
   */
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变,携带值为', e.detail.value)
    this.setData({
      buyindex: e.detail.value
    })
  },

  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      companyindex: e.detail.value
    })
  },

  bindChangeDate: function (e) {
    console.log('picker发送选择改变,携带值', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  formSubmit: function (e) {
    /**手机号正则 */
    var reg = /^[1][3,4,5,6,7,8][0-9]{9}$/
    /**EMS*/
    var regEMS = /^[C, E][A - Z][0 - 9]{9}(CN)$/
    /**申通E物流*/
    var regST = /^(268 | 888 | 588 | 688 | 998)[0 - 9]{9}$/
    /**圆通速递*/
    var regYT = /^(0 | 1 | 2 | 3 | E | D | F)[0 - 9]{9}$/
    /**中通速递*/
    var regZT = /^((618 | 680 | 828 | 571 | 518)[0 - 9]{9})$|^(2008[0 - 9]{8 })$ |^((00 | 10)[0 - 9]{10 })$/
    /**宅急送*/
    var regZJS = /^[0 - 9]{10}$/
    /**韵达快运*/
    var regYD = /^[0 - 9]{13}$/
    /**天天快递*/
    var regTT = /^[0 - 9]{14}$/
    /**风火天地*/
    var regFH = /^[0 - 9]{10}$/
    /**华强物流*/
    var regHQ = /^[A - Za - z0 - 9] * [0 | 2 | 4 | 6 | 8]$/
    /**联邦快递*/
    var regLB = /^[0 - 9]{12}$/
    if (e.detail.value.orderNo.length == 0) {
      wx.showToast({
        title: '请输入单号',
        icon: 'loading',
        duration: 1000
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    }
    else if (e.detail.value.userName.length == 0) {
      wx.showToast({
        title: '姓名不能为空！',
        icon: 'loading',
        duration: 1500
      }),

        setTimeout(function () {
          wx.hideToast()
        }, 2000)
    } else if (e.detail.value.userName.length == 6) {
      wx.showToast({
        title: '名字过长',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)

      /**} else if (e.detail.value.mobile.length == 0) {
        wx.showToast({
          title: '手机号不能为空！',
          icon: 'loading',
          duration: 1500
        }),
    
          setTimeout(function () {
            wx.hideToast()
          }, 2000)
      } else if (e.detail.value.mobile.length == 12) {
        wx.showToast({
          title: '请输入11为手机号码！',
          icon: 'loading',
          duration: 1500
        })
        setTimeout(function () {
          wx.hideToast()
        }, 2000)*/
    } else if (!reg.test(e.detail.value.mobile)) {
      wx.showToast({
        title: '请输入正确号码',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)

    } else {
      wx.request({
        url: 'https://www.baidu.com',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        /** 提交的数据 */
        data: { mobile: e.detail.value.mobile },
        success: function (res) {
          if (res.data.status == 0) {
            wx.showToast({
              title: res.data.info,
              icon: 'loading',
              duration: 1500
            })
          } else {
            wx.showToast({
              title: '提交成功！',
              icon: 'success',
              duration: 1000
            })
          }
        }
      })
    }
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