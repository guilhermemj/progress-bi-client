<template>
	<MainLayout page-class="hello-world" page-title="Progress: BI">
		<div class="row">
			<div class="col-xs-12 col-lg-6">
				<GradesByClassChart />
			</div>

			<div class="col-xs-12 col-lg-6">
				<GradesByStudentChart />
			</div>
		</div>
	</MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';
import GradesByStudentChart from '@/components/dashboard/GradesByStudentChart';
import GradesByClassChart from '@/components/dashboard/GradesByClassChart';

export default {
	name: 'Dashboard',

	components: {
		MainLayout,
		GradesByStudentChart,
		GradesByClassChart,
	},
};
</script>
