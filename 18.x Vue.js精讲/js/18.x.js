// 组件
Vue.component('', {
	template: ``,
	methods: {
		name: function () {
			// body...
		},
	},
	data: function () {
		return {
			: ,
		}
	},
});

// 过滤器
Vue.filter('', function (val) {
	val = ||;
	return ;
});

// 自定义组件
Vue.directive('', function (el, binding) {
	// body...
});

// mixins
var base = {
	methods: {
		method1: function () {
			// body...
		},
		method2: function () {
			// body...
		}
	},
	data: function () {
		return {
			key1: "value1",
			key2: "value2",
			key3: "value3"
		}
	}
};

var app = new Vue({
	el: '#app',
	data: {
		key: value,
	}
});