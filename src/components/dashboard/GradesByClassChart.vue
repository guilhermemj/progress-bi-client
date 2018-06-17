<template>
	<div :class="['box box-default', { loading }]">
		<div class="box-header">
			<h2 class="box-title">Média de notas por turma</h2>
		</div>

		<div class="box-body">
			<form class="form">
				<label for="course-select">Escolha um curso</label>
				<select id="course-select" class="form-control" v-model="currentCourseId">
					<option value="" disabled hidden></option>

					<option v-for="course in coursesList" :key="course.id" :value="course.id">
						{{course.name}}
					</option>
				</select>
			</form>

			<BaseChart :chart-config="chartConfig" />
		</div>
	</div>
</template>

<script>
import {
	mapState as mapStoreState,
} from 'vuex';

import {
	getRandomInt,
	repeat,
	sortBy,
} from '@/utils';

import BaseChart from '@/components/base/BaseChart';

const BASE_CHART_OPTIONS = {
	type: 'line',

	options: {
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

export const getRandomColors = (length = 1) => {
	const borderColor = [];
	const backgroundColor = [];

	repeat(() => {
		const red = getRandomInt(0, 255);
		const green = getRandomInt(0, 255);
		const blue = getRandomInt(0, 255);

		borderColor.push(`rgba(${red}, ${green}, ${blue}, .75)`);
		backgroundColor.push(`rgba(${red}, ${green}, ${blue}, 1)`);
	}, length);

	return {
		borderColor,
		backgroundColor,
	};
};

export default {
	name: 'GradesByClassChart',

	components: {
		BaseChart,
	},

	data() {
		return {
			loading: true,
			currentCourseId: null,
		};
	},

	computed: {
		...mapStoreState({
			coursesList(state) {
				return Array.from(state.courses.list).sort(sortBy('name'));
			},

			classesList: state => state.classes.list,
			examsList: state => state.exams.list,
			resultsList: state => state.results.list,
			studentsList: state => state.students.list,
		}),

		currentExams() {
			return this.examsList.filter(
				exam => exam.classId === this.currentCourseId,
			);
		},

		chartData() {
			/* eslint-disable no-param-reassign */
			const groupResults = (groupedResults, result) => {
				const pivot = result.exam.id;

				if (!groupedResults[pivot]) {
					groupedResults[pivot] = {
						hits: 0,
						errors: 0,
						examId: result.exam.id,
						examName: result.exam.name,
					};
				}

				groupedResults[pivot].hits += result.hits;
				groupedResults[pivot].errors += result.errors;

				return groupedResults;
			};
			/* eslint-disable no-param-reassign */

			const getResultsByClass = (classObj) => {
				const classStudents = this.studentsList.filter(
					student => student.classes.some(
						({ id }) => id === classObj.id,
					),
				);

				const classExams = this.examsList.filter(
					exam => exam.classId === classObj.id,
				);

				const classResults = this.resultsList.filter(
					result => (
						classStudents.some(({ id }) => id === result.student.id) &&
						classExams.some(({ id }) => id === result.exam.id)
					),
				);

				return {
					code: classObj.code,
					name: classObj.name,
					examResults: Object.values(
						classResults.reduce(groupResults, {}),
					),
				};
			};

			const currentClassesList = this.classesList.filter(
				({ courseId }) => courseId === this.currentCourseId,
			);

			return currentClassesList.map(getResultsByClass);
		},

		chartConfig() {
			const getGrade = ({ hits, errors }) => {
				const total = hits + errors;

				return (10 * (hits / total)).toFixed(2);
			};

			return {
				...BASE_CHART_OPTIONS,

				data: {
					labels: (Array.from(this.currentExams)
						.sort(sortBy('name'))
						.map(exam => exam.name)
					),
					datasets: Array.from(this.chartData).map(
						item => ({
							label: item.name,
							data: (Array.from(item.examResults)
								.sort(sortBy('examName'))
								.map(getGrade)
							),

							borderWidth: 1,
							fill: false,
							...getRandomColors(),
						}),
					),
				},
			};
		},
	},

	watch: {
		// Init filter with store
		coursesList() {
			if (!this.currentCourseId && this.coursesList.length > 0) {
				this.currentCourseId = this.coursesList[0].id;
				this.loading = false;
			}
		},
	},

	created() {
		this.$store.dispatch('courses/fetchList');
		this.$store.dispatch('classes/fetchList');
		this.$store.dispatch('exams/fetchList');
		this.$store.dispatch('students/fetchList');
		this.$store.dispatch('results/fetchList');
	},
};
</script>

<style lang="scss" scoped>
	.box.loading::after {
		content: '';

		position: absolute;
		top: 0;
		left: 0;

		background: #f3f3f3;
		width: 100%;
		height: 100%;

		display: block;
		opacity: .5;
	};
</style>
