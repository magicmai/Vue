var app = new Vue({
	el: '#app',
	methods: {
		onClick: function() {
			console.log('已点击！');
		},
		onEnter: function() {
			console.log('鼠标滑过！');
		},
		onOut: function() {
			console.log('鼠标划出！');
		},
		onSubmit: function() {
			//e.preventDefault();
			console.log('提交！');
		},
		onKeyup: function() {
			console.log('key pressed!');
		},
		onEnter: function() {
			console.log('Entered!');
		},
	}
});