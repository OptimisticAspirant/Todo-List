var app = getApp()
Page({
  data: {
    flag: true, 
    disabled: false,  
    opacity: 0.7,
    settime: 25
  },
 
  onLoad: function (options) {
  },

  timeInput: function(e){
    this.setData({
      settime: parseInt(e.detail.value)
    })
  },

  show: function () {
    var that=this;
    that.setData({flag: false });
    countDown(that,that.data.settime*60);
  },

  hide: function () {
    this.setData({
      flag: true,
      disabled: true,
      opacity: 0.7
    })
  },

  onReady: function () {
    
  },

  onShow: function () {
    
  },

  onHide: function () {
    
  },

  onUnload: function () {
    
  },

  onPullDownRefresh: function () {
    
  },

  onReachBottom: function () {
    
  },
 

  onShareAppMessage: function () {
    
  }
})
 
function countDown(that, count) {
  if (count == 0) {
    that.setData({
      counttime: count,
      opacity:1
    })
    return;
  }
  that.setData({
    counttime: count
  })
  setTimeout(function () {
    count--;
    countDown(that, count);
  }, 1000);
}