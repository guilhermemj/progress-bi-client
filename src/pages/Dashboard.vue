<template>
	<MainLayout page-class="hello-world" page-title="Progress: BI">
		<div class="row">
			<div class="col-xs-12 col-md-6">
				<StudentGradesChart />
			</div>

			<div class="col-xs-12 col-md-6">
				<div class="box box-default">
					<div class="box-header">
						<h2 class="box-title">Média de notas por turma</h2>
					</div>

					<div class="box-body">
						<BaseChart :chart-config="lineOptions" />
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-md-6">
				<div class="box box-default">
					<div class="box-header">
						<h2 class="box-title">Quantidade de acertos por categoria</h2>
					</div>

					<div class="box-body">
						<BaseChart :chart-config="pieOptions" />
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-md-6">
				<div class="box box-default">
					<div class="box-header">
						<h2 class="box-title">
							Test field ({{count}})
							<button class="btn btn-primary" @click="increment">+</button>
						</h2>
					</div>

					<FilteredChart />
				</div>
			</div>
		</div>
	</MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';
import BaseChart from '@/components/dashboard/BaseChart';
import FilteredChart from '@/components/dashboard/FilteredChart';
import StudentGradesChart from '@/components/dashboard/StudentGradesChart';
import chartOptions from '@/assets/mock-data/chart-options';

export default {
	name: 'Dashboard',

	components: {
		MainLayout,
		BaseChart,
		FilteredChart,
		StudentGradesChart,
	},

	data() {
		return {
			barOptions: chartOptions.bar,
			lineOptions: chartOptions.line,
			pieOptions: chartOptions.pie,
		};
	},

	computed: {
		count() {
			return this.$store.state.count;
		},
	},

	methods: {
		increment() {
			this.$store.commit('increment');
		},
	},
};
</script>
