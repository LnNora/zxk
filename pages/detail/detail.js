// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myAddress:'请添加地址',
    amount:1,
    min:true,
    max:false,
    good:[
      {price:100,name:'1kg'},
      {price:200,name:'2kg'},
      {price:300,name:'3kg'}]
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
  
  },



  chooseAddress:function(){
    var address;
    var that = this;
    wx.chooseAddress({
      success: function (res) {
        console.log(res.userName)
        console.log(res.postalCode)
        console.log(res.provinceName)
        console.log(res.cityName)
        console.log(res.countyName)
        console.log(res.detailInfo)
        console.log(res.nationalCode)
        console.log(res.telNumber)
        address = res.provinceName + res.cityName + res.countyName + res.detailInfo;
        that.setData({ myAddress: address })
      }
    })
  },

  increase:function(){
    var amount = this.data.amount+1;
    this.setData({ amount: amount,min:false});
  },
  reduce:function(){
    if(this.data.amount>1){
    var amount = this.data.amount - 1;
    this.setData({ amount: amount })
    }else{
      this.setData({ min: true })
    }
  }
})