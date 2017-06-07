var startNum = 0;
var apiUrl = 'https://api.douban.com/v2/movie/in_theaters';
const render = function(obj, params) {
	wx.showLoading({
	  title: '加载中',
	})
	wx.request({
	  url: apiUrl,
	  data: {
	  	start: startNum
	  },
	  header: {
	      'content-type': 'application/x-www-form-urlencoded'
	  },
	  success: function(res) {
	  	wx.hideLoading();
	    obj.setData({
	    	list: res.data.subjects,
	    	title: params.title
	    })
	    startNum += 20;
	  }
	})
}



Page({
	data: {
		list: [],
		title: '正在热映'
	},
	onLoad (params) {
		const _this = this;
		render(_this, params);
	},
	onReachBottom (params) {
		const _this = this;
		render(_this, params);
	}
})