<template>
	<div class="box-body">
		<form class="form">
			<select name="" id="" class="form-control" v-model="message">
				<option value="bar">bar</option>
				<option value="line">line</option>
			</select>
		</form>

		<BaseChart :chart-config="chartOptions" />
	</div>
</template>

<script>
import BaseChart from '@/components/dashboard/BaseChart';
import teste from '@/assets/mock-data/chart-options';

export default {
	name: 'FilteredChart',

	components: {
		BaseChart,
	},

	data() {
		return {
			message: 'bar',
			optionsBase: { ...teste },
		};
	},

	computed: {
		chartOptions() {
			return this.optionsBase[this.message];
		},
	},
};
</script>

<style>

</style>
