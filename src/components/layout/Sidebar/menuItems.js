export default [
	{
		url: '/',
		text: 'Dashboard',
		icon: 'tachometer-alt',
	},

	{
		url: '/import',
		text: 'Importar Dados',
		icon: 'table',
	},

	{
		url: '#',
		text: 'Multilevel',
		icon: 'link',
		submenu: [
			{
				url: '/',
				text: 'Local Link in level 2',
			},

			{
				url: '//google.com.br',
				text: 'Link in level 2',
			},

			{
				url: 'https://google.com.br',
				text: 'Link in level 2',
			},
		],
	},

	{
		url: '/hello',
		text: 'Hello World',
		icon: 'globe',
	},
];
