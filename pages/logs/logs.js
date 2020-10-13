//logs.js
Page({
  data:{
    logs: [],
    modalHidden: true,
    toastHidden: true
  },
  onShow: function () {
    var logs = wx.getStorageSync('todo_logs')
    if (logs) {
      this.setData({ logs: logs.reverse() })
    }
  },
  set: function() {

  },
  onLoad: function() {},
  switchModal: function() {
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },
  hideToast: function() {
    this.setData({
      toastHidden: true
    })
  },
  clearLog: function(e) {
    wx.setStorageSync('logs', [])
    this.switchModal()
    this.setData({
      toastHidden: false
    })
    this.onShow()
  }
})
