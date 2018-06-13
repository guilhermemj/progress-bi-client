const getRandomInt = (min = 0, max = 1) => (
	min + Math.floor(Math.random() * ((max - min) + 1))
);

const getRandomColors = (length = 1) => {
	const borderColor     = [];
	const backgroundColor = [];

	for (let index = 0; index < length; index++) {
		const red   = getRandomInt(0, 255);
		const green = getRandomInt(0, 255);
		const blue  = getRandomInt(0, 255);

		borderColor.push(`rgba(${red}, ${green}, ${blue}, .75)`);
		backgroundColor.push(`rgba(${red}, ${green}, ${blue}, 1)`);
	}

	return {
		borderColor,
		backgroundColor,
	};
};

const bar = {
	type: 'line',

	data: {
		labels: ['2016-1', '2016-2', '2017-1', '2017-2'],
		datasets: [
			{
				label: '20545408',
				data: [10, 9, 3, 5],
				borderWidth: 1,
				fill: false,
				...getRandomColors(),
			},

			{
				label: '20329812',
				data: [10, 9, 3, 5].map(() => getRandomInt(0, 10)),
				borderWidth: 1,
				fill: false,
				...getRandomColors(),
			},

			{
				label: '20744712',
				data: [10, 9, 3, 5].map(() => getRandomInt(0, 10)),
				borderWidth: 1,
				fill: false,
				...getRandomColors(),
			},

			{
				label: '20472912',
				data: [10, 9, 3, 5].map(() => getRandomInt(0, 10)),
				borderWidth: 1,
				fill: false,
				...getRandomColors(),
			},
		],
	},

	options: {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						min: 0,
						max: 10,
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
						min: 0,
						max: 10,
					},
				},
			],
		},
	},
};

const pie = {
	type: 'pie',

	data: {
		labels: ['Acertos - CG', 'Erros - CG', 'Acertos CE', 'Erros - CE'],

		datasets: [
			{
				label: 'CCOP2N6',
				data: [8, 15, 1, 2],
				...getRandomColors(4),
			},
		],
	},
};

export default {
	bar,
	line,
	pie,
};
