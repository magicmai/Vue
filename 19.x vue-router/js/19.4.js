var routes = [
	{
		path: '/',
		component: {
			template: `
				<div>
					<h1>首页</h1>
				</div>
			`
		} ,
	},
	{
		path: '/about',
		component: {
			template: `
				<div>
					<h1>关于我们</h1>
				</div>
			`,
		} ,
	},
	{
		path: '/user/:name',
		name: 'user',
		component: {
			template: `
				<div>
					<div>我叫：{{$route.params.name}}</div>
					<router-link to="more" append>更多信息</router-link>
					<router-view></router-view>
				</div>
			`,
		} ,
		// 子路由
		children: [
			{
				path: 'more',
				component: {
					template: `
						<div>
							用户：{{$route.params.name}}的详细信息
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero earum iure consequatur quo, incidunt a eligendi expedita labore. Cumque quidem odio illo blanditiis et rem totam optio vero nemo eaque.</p>
						</div>
					`,
				},
			},
		],
	},

];

var router = new VueRouter({
	routes: routes,
});

new Vue({
	el: '#app',
	router: router,
	methods: {
		surf: function () {
			setTimeout(function () {
				console.log(this.router);
				this.router.push('/about');
				setTimeout(function () {
					//手动访问：
					//this.router.push('/user/王小花');
					//传参：
					this.router.push({name: 'user', params: {name: '王小花'}});
				}, 2000);
			}, 2000);
		}
	}
});