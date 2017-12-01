Vue.directive('pin', function (el, binding) {
	// console.log('el: ', el);
	// var val = binding.value;
	// console.log('val: ', val);

	var pinned = binding.value;
	var position = binding.modifiers;  // modifier: 调节器
	var warning = binding.arg;
	console.log('position: ', position); // {bottom: true, right: true}
	console.log('warning: ', warning); // true
	
	if (pinned) {
		el.style.position = 'fixed';
		for (var key in position) {
			if (position[key]) {
				el.style[key] = '10px';
			}
		}

		if (warning === 'true') {
			el.style.background = 'yellow';
		}

		// el.style.top = '10px';
		// el.style.left = '10px';
	} else {
		el.style.position = 'static';
	}
});

var app = new Vue({
	el: '#app',
	data: {
		card1: {
			pinned: false,
		},
		card2: {
			pinned: false,
		}

	}
});