/*

// 全局组件
Vue.component('alert', {
	template: '<button @click="on_click">Click</button>',
	methods: {
		on_click: function () {
			alert("嘿嘿嘿！");
		}
	}
});

new Vue({
	el: '#seg1'
});

new Vue({
	el: '#seg2'
});
*/

// 局部组件
/*
new Vue({
	el: '#seg3',
	components: {
		alert: {
			template: '<button @click="on_click">Click</button>',
			methods: {
				on_click: function () {
					alert("嘿嘿嘿！");				
				}	
			}
		}
	}
});
*/


//封装
var Alert = {
	template: '<button @click="on_click">Click</button>',
	methods: {
		on_click: function () {
			alert("嘿嘿嘿！");				
		}	
	}
};

new Vue({
	el: '#seg4',
	components: {
		alert: Alert
	}
});


