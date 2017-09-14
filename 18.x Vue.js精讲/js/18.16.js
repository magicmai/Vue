var base = {
	methods: {
		show: function() {
			this.visible = true;
		},
		hide: function () {
			this.visible = false;
		},
		toggle: function () {
			this.visible = !this.visible;
		}
	},
	data: function() {
		return {
			visible: false,
		}
	}
};

Vue.component('tooltip', {
	template: `
		<div>
			<span @mouseenter="show" @mouseleave="hide">show</span>
			<div v-if="visible">
				You can see this!
			</div>
		</div>
	`,
	mixins: [base],

	// 可以覆盖 mixins 定义的属性
	data: function () {
		return {
			visible: true
		}
	},
});

Vue.component('popup', {
	template: `
		<div>
			<button @click="toggle">Popup</button>
			<div v-if="visible">
				<span @click="hide">X</span>
				<h4>Tilte</h4>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quaerat, aut tempora sint cupiditate vitae quam voluptatibus eveniet. Odio molestias reiciendis sequi autem adipisci eum ducimus labore vero nisi doloribus.
			</div>
		</div>
	`,
	mixins: [base],
});

new Vue({
	el: '#app',
	data: {}
});