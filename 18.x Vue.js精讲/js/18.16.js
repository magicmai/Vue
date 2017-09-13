Vue.component('tooltip', {

});

Vue.component('popup', {
	template: `
		<div>
			<button @click="toggle">Popup</button>
			<div v-if="visible">
				<h4>Tilte</h4>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quaerat, aut tempora sint cupiditate vitae quam voluptatibus eveniet. Odio molestias reiciendis sequi autem adipisci eum ducimus labore vero nisi doloribus.
			</div>
		</div>
	`,
	methods: {
		toggle: function () {
			this.visible = !this.visible;
		}
	},
	data: function () {
		return {
			visible: false,
		}
	},
});

new Vue({
	el: '#app',
	data: {

	}
});