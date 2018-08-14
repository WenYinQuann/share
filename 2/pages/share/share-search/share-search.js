Page({

  /**
   * 页面的初始数据
   */
  data: {
    tuijianmu: [
      {
        path: '/images/share/1.jpg',
        bookName: '线性代数+高等数学',
        newPrice: 40.0,
        describe: '(八成新)',
        oldPrice: 85.0,
      },
      {
        path: '/images/share/2.jpg',
        bookName: '中国近代史纲要',
        describe: '(九成新)',
        newPrice: 6.0,
        oldPrice: 32.0,
      },
      {
        path: '/images/share/3.jpg',
        bookName: '六级英语真题全套',
        describe: '(七成新)',
        newPrice: 20.0,
        oldPrice: 56.8,
      },


      {
        path: '/images/share/4.jpg',
        bookName: '白夜行',
        describe: '(全新)',
        newPrice: 25.0,
        oldPrice: 59.6,
      },
      {
        path: '/images/share/5.jpg',
        bookName: '艺术类大学英语2',
        describe: '(七成新)',
        newPrice: 10.0,
        oldPrice: 39.0,
      },
      {
        path: '/images/share/6.jpg',
        bookName: '心理学概论',
        describe: '(七成新)',
        newPrice: 23.0,
        oldPrice: 53.0,
      }
    ]
  },

  
  onLoad: function (options) {
    var text=options.text;
    // console.log(text);
    
  },

})