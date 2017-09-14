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
		component: {
			template: `
				<div>
					<div>我叫：{{$route.params.name}}</div>
					<div>年龄：{{$route.query.age}}</div>
				</div>
			`,
			// query传参："/user/李小明?age=22"
		} ,
	},
];

var router = new VueRouter({
	routes: routes,
});

new Vue({
	el: '#app',
	router: router,
});