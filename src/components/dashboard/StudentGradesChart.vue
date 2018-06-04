<template>
	<div class="box box-default">
		<div class="box-header">
			<h2 class="box-title">Notas por aluno</h2>
		</div>

		<div class="box-body">
			<form class="form">
				<select name="" id="" class="form-control" @change="updateChart">
					<option value="bar" v-for="classObj in classes" :key="classObj.id">bar</option>
				</select>
			</form>

			<BaseChart :chart-config="chartConfig" />
		</div>
	</div>
</template>

<script>
import BaseChart from '@/components/dashboard/BaseChart';
import api from '@/api';
import chartOptions from '@/assets/mock-data/chart-options';

const BASE_CHART_OPTIONS = {
	type: 'line',

	options: {
		showLines: false,

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

export default {
	name: 'StudentGradesChart',

	components: {
		BaseChart,
	},

	data() {
		return {
			classes: [],
		};
	},

	computed: {
		chartConfig() {
			if (Math.ceil(Math.random())) {
				return chartOptions.bar;
			}

			return {
				...BASE_CHART_OPTIONS,

				data: {

				},
			};
		},
	},

	methods: {
		updateChart() {
			api.getResults().then((classes) => {
				this.classes = classes;
			});
		},
	},

	mounted() {
		this.updateChart();
	},
};
</script>

<style>

</style>
