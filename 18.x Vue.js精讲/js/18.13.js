/**
 * 事件调度器
 */
var Event = new Vue();
// console.log('Event: ', Event);
// for (key in Event) {
// 	console.log('key: ', key);
// }

Vue.component('huahua', {
	template: `
		<div>
			我说：<input @keyup="on_change" v-model="i_said" />
		</div>`,
	methods: {
		on_change: function () {
			// 触发一个事件
			Event.$emit('huahua-said-something', this.i_said);
		},
	},
	data: function () {
		return {
			i_said: '',
		};
	}
});

Vue.component('shasha', {
	template: `<div>花花说：{{huahua_said}}</div>`,
	data: function () {
		return {
			huahua_said: '',
		};
	},
	mounted: function () {
		var me = this;
		Event.$on('huahua-said-something', function (data) {
			console.log('data: ', data);
			me.huahua_said = data;
		});
	}
});

var app = new Vue({
	el: '#app',
	data: {},
});
