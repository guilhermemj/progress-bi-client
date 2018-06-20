<template>
	<canvas></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
	name: 'BaseChart',

	props: {
		chartConfig: {
			type: Object,
			default: null,
		},
	},

	data() {
		return {
			initialized: false,
		};
	},

	watch: {
		chartConfig() {
			if (this.chartConfig === null) {
				return;
			}

			if (!this.initialized) {
				this.chart = new Chart(this.$el, { ...this.chartConfig });
				this.initialized = true;
				return;
			}

			const { data, options } = this.chartConfig;

			this.chart.data = { ...data };
			this.chart.options = { ...options };
			this.chart.update();
		},
	},

	mounted() {
		if (this.chartConfig === null) {
			return;
		}

		this.chart = new Chart(this.$el, { ...this.chartConfig });
		this.initialized = true;
	},
};
</script>
