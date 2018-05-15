<template>
	<MainLayout page-class="hello-world" page-title="Progress: BI">
		<div class="row">
			<div class="col-xs-12 col-md-6">
				<div class="canvas-wrapper">
					<h2>Notas por aluno</h2>
					<canvas id="bar-canvas"></canvas>
				</div>
			</div>

			<div class="col-xs-12 col-md-6">
				<div class="canvas-wrapper">
					<h2>Média de notas por turma</h2>
					<canvas id="line-canvas"></canvas>
				</div>
			</div>

			<div class="col-xs-12 col-md-6">
				<div class="canvas-wrapper">
					<h2>Quantidade de acertos por categoria</h2>
					<canvas id="pie-canvas"></canvas>
				</div>
			</div>
		</div>
	</MainLayout>
</template>

<script>
import Chart      from 'chart.js';
import MainLayout from '@/layouts/MainLayout';
import test from '@/assets/mock-data/chart-options';

export default {
	name: 'Dashboard',

	components: {
		MainLayout,
	},

	mounted() {
		this.barChart = new Chart(
			document.getElementById('bar-canvas'),
			test.bar,
		);

		this.lineChart = new Chart(
			document.getElementById('line-canvas'),
			test.line,
		);

		this.pieChart = new Chart(
			document.getElementById('pie-canvas'),
			test.pie,
		);
	},
};
</script>

<style>

</style>
