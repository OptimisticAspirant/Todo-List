Page({
  data: {
   timer: '',
   settime: 25,
   counttime: 1500,
   flag: true
  },

  timeInput: function(e){
    this.setData({
      settime: parseInt(e.detail.value)
    })
    this.setData({
      counttime: this.data.settime * 60
    })
  },

  show: function() {
    this.setData({
      flag: false
    })
    this.countDown();
  },

  hide: function () {
    this.setData({
      flag: true,
      counttime: 0
    })
    clearInterval(this.data.timer);
  },

  countDown: function () {
   let that = this;
   let counttime = that.data.settime * 60;
   that.setData({
    timer: setInterval(function () {
     counttime--;
     that.setData({
      counttime: counttime
     })
     if (counttime == 0) {
      clearInterval(that.data.timer);
     }
    }, 1000)
   })
  }
 })
 



