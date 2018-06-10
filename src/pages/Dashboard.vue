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
						<form class="form">
							<select class="form-control">
								<option
									v-for="item in exams"
									:key="item.id"
									:value="item.id"
								>
									{{item.name}}
								</option>
							</select>
						</form>

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
		</div>
	</MainLayout>
</template>

<script>
import { mapGetters as mapStoreGetters } from 'vuex';

import MainLayout from '@/layouts/MainLayout';
import BaseChart from '@/components/base/BaseChart';
import StudentGradesChart from '@/components/dashboard/StudentGradesChart';
import chartOptions from '@/assets/mock-data/chart-options';

export default {
	name: 'Dashboard',

	components: {
		MainLayout,
		BaseChart,
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
		...mapStoreGetters('exams', {
			exams: 'sortedList',
		}),
	},

	mounted() {
		this.$store.dispatch('exams/fetchList');
	},
};
</script>
