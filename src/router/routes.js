import HelloWorld from '@/pages/HelloWorld';
import Login      from '@/pages/Login';
import Dashboard  from '@/pages/Dashboard';
import Import     from '@/pages/Import';

export default [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard,
	},

	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			public: true,
		},
	},

	{
		path: '/import',
		name: 'Import',
		component: Import,
	},

	{
		path: '/hello',
		name: 'HelloWorld',
		component: HelloWorld,
	},
];
