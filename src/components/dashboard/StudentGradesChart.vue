<template>
	<div class="box box-default">
		<div class="box-header">
			<h2 class="box-title">Notas por aluno</h2>
		</div>

		<div class="box-body">
			<form class="form">
				<select class="form-control" @change="updateChart">
					<option
						v-for="classObj in classes"
						:key="classObj.id"
						:value="classObj.id"
					>
						{{classObj.name}}
					</option>
				</select>
			</form>

			<BaseChart :chart-config="chartConfig" />
		</div>
	</div>
</template>

<script>
import { mapGetters as mapStoreGetters } from 'vuex';

import BaseChart from '@/components/base/BaseChart';
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

	computed: {
		...mapStoreGetters('courses', {
			classes: 'sortedList',
		}),

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

		},
	},

	mounted() {
		this.$store.dispatch('courses/fetchList');
	},
};
</script>

<style>

</style>
