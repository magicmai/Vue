Vue.component('balance', {
	template:`
		<div>
			<show @show_balance="show_balance"></show>
			<div v-if="show">
				您的余额：￥100元
			</div>
		</div>
	`,
	methods: {
		show_balance: function (data) {
			this.show = true;
			console.log('data: ', data);
		}
	},
	// 默认 show 为 false
	data: function () {
		return {
			show: false,
		}
	},
});

Vue.component('show', {
	template: `<button @click="on_click()">显示余额</button>`,
	methods: {
		on_click: function () {
			this.$emit('show_balance', {a: 1, b: 2});
		}
	},
});

new Vue({
	el: '#app',

});