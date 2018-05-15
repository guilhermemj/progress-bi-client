const bar = {
	type: 'bar',

	data: {
		labels: ['20545408', '20329812', '20744712', '20849203', '20472912', '20669423'],
		datasets: [
			{
				label: '2016-1',
				data: [10, 9, 3, 5, 2, 3],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],

				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],

				borderWidth: 1,
			},
		],
	},

	options: {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	},
};

const line = {
	type: 'line',

	data: {
		labels: ['2016-1', '2016-2', '2017-1', '2017-2', '2018-1'],
		datasets: [
			{
				label: 'CCOP2N5',
				data: [4, 5, 5, 6.5, 7],
				backgroundColor: [
					// 'rgba(255, 99, 132, 0.2)',
					// 'rgba(54, 162, 235, 0.2)',
					// 'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
				],

				borderColor: [
					// 'rgba(255,99,132,1)',
					// 'rgba(54, 162, 235, 1)',
					// 'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
				],

				borderWidth: 1,

				fill: false,
			},

			{
				label: 'CCOP2N6',
				data: [4.5, 5.75, 7, 7.5, 8],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
				],

				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
				],

				borderWidth: 1,

				fill: false,
			},

			{
				label: 'CCOP2N7',
				data: [8, 6.7, 5, 7, 10],
				backgroundColor: [
					// 'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
				],

				borderColor: [
					// 'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
				],

				borderWidth: 1,

				fill: false,
			},

			{
				label: 'CCOP2N8',
				data: [7.8, 6, 7.5, 7, 9],
				backgroundColor: [
					// 'rgba(255, 99, 132, 0.2)',
					// 'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
				],

				borderColor: [
					// 'rgba(255,99,132,1)',
					// 'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
				],

				borderWidth: 1,

				fill: false,
			},
		],
	},

	options: {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	},
};

const pie = {
	type: 'pie',

	data: {
		labels: ['Conhecimentos gerais', 'Conhecimentos específicos'],

		datasets: [
			{
				label: 'CCOP2N6',
				data: [8, 15],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
				],

				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
				],
			},
		],
	},
};

export default {
	bar,
	line,
	pie,
};