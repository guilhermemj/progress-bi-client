<template>
	<MainLayout page-class="hello-world" page-title="Progress: BI">
		<div class="row">
			<div class="col-xs-12 col-md-6">
				<GradesByClassChart />
			</div>

			<div class="col-xs-12 col-md-6">
				<GradesByStudentChart />
			</div>

			<div class="col-xs-12 col-md-6">
				<div class="box box-default">
					<div class="box-header">
						<h2 class="box-title">Proporção de acertos por categoria</h2>
					</div>

					<div class="box-body">
						<BaseChart :chart-config="pieOptions" />
					</div>
				</div>
			</div>
		</div>
	</MainLayout>
</template>

<script>
import { mapGetters as mapStoreGetters } from 'vuex';

import MainLayout from '@/layouts/MainLayout';
import BaseChart from '@/components/base/BaseChart';
import GradesByStudentChart from '@/components/dashboard/GradesByStudentChart';
import GradesByClassChart from '@/components/dashboard/GradesByClassChart';
import chartOptions from '@/assets/mock-data/chart-options';

export default {
	name: 'Dashboard',

	components: {
		MainLayout,
		BaseChart,
		GradesByStudentChart,
		GradesByClassChart,
	},

	data() {
		return {
			barOptions: chartOptions.bar,
			lineOptions: chartOptions.line,
			pieOptions: chartOptions.pie,
		};
	},

	computed: {
		...mapStoreGetters('exams', {
			exams: 'sortedList',
		}),
	},

	created() {
		this.$store.dispatch('exams/fetchList');
	},
};
</script>
