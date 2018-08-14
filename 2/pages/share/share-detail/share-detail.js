Page({

  data: {
    buyNumber:1,
    bookDetail:{
      path:'/images/share/1.jpg',
      bookName:'科技之巅',
      detail:'《麻省理工科技评论》50大全球突破性技术深度剖析',
      newPrice:39.2,
      describe:'(八成新)',
      oldPrice:98.0,
      publishers:'人民邮电出版社',
      publishTime:'2018-8-1',
      remainAmount:12,
  }
  },
  onLoad: function (options) {
    this.setData({
      buyNumber:1,
    })
  },
  onJiaTap:function(event){
    var buyNumber=this.data.buyNumber+1;
    this.setData({
      buyNumber:buyNumber,
    })
  },
  onJianTap:function(){
    var buyNumber = this.data.buyNumber-1;
    if(buyNumber==0)
      {
        buyNumber=1
      }
    this.setData({
      buyNumber: buyNumber,
    })
  },
  onShareTap:function(){
    wx.navigateTo({
      url: '../share-buy/share-buy?buyNumber='+this.data.buyNumber,
    })
  }
})