var app = new Vue({
	el: '#app',
	data: {
		math: 100,
		english: 92,
		history: 82
	},
	computed: {
		sum: function () {
			return this.math + this.english + this.history;
		},
		average: function () {
			return Math.round(this.sum / 3);
		}
	}
});