//作用：优化用户体验

Vue.filter('meter', function (val, unit) {
	val = val || 0;
	unit = unit || 'm';
	return (val / 1000).toFixed(2) + unit;
});

Vue.filter('currency', function (val, unit) {
	val = val || 0;
	unit = unit || '元';
	return val + unit;
});

var app = new Vue({
	el: '#app',
	data: {
		length: 100,
		price: 10
	}
});