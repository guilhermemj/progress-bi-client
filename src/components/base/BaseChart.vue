<template>
	<canvas></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
	name: 'BaseChart',

	props: [
		'chartConfig',
	],

	watch: {
		chartConfig() {
			const { data, options } = this.chartConfig;

			this.chart.data = { ...data };
			this.chart.options = { ...options };
			this.chart.update();
		},
	},

	mounted() {
		this.chart = new Chart(this.$el, { ...this.chartConfig });
	},
};
</script>
