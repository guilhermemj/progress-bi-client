<template>
  <md-card :class="{ loading }">
    <md-card-header>
      <h2 class="md-title">Média de notas por turma</h2>
    </md-card-header>

    <md-card-content>
      <form class="form">
        <md-field>
          <label for="course-select">Escolha um curso</label>

          <md-select id="course-select" class="form-control" v-model="currentCourseId">
            <md-option value="" disabled hidden />

            <md-option v-for="course of coursesList" :key="course.id" :value="course.id">
              {{course.name}}
            </md-option>
          </md-select>
        </md-field>
      </form>

      <BaseChart :chart-config="chartConfig" />
    </md-card-content>

    <md-progress-bar md-mode="indeterminate" v-show="loading" />
  </md-card>
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

import BaseChart from '@/components/general/BaseChart';

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

const getRandomColors = (length = 1) => {
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
      currentExamsList: [],
      chartData: [],
    };
  },

  computed: {
    ...mapStoreState({
      coursesList(state) {
        return Array.from(state.courses.list).sort(sortBy('name'));
      },
    }),

    chartConfig() {
      const getGrade = ({ hits, total }) => (10 * (hits / total)).toFixed(2);

      return {
        ...BASE_CHART_OPTIONS,

        data: {
          labels: (Array.from(this.currentExamsList)
            .sort(sortBy('name'))
            .map(exam => exam.name)
          ),
          // Chart data é o array de provas
          datasets: Array.from(this.chartData).map(
            // item === exam
            item => ({
              label: item.name,
              data: (Array.from(item.results)
                .sort(sortBy('exam'))
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

    currentCourseId() {
      this.fecthChartData();
    },
  },

  methods: {
    async fecthChartData() {
      /* eslint-disable no-param-reassign */
      const groupResults = (groupedResults, result) => {
        const pivot = result.exam;

        if (!groupedResults[pivot]) {
          groupedResults[pivot] = {
            hits: 0,
            errors: 0,
            total: 0,
            exam: result.exam,
          };
        }

        groupedResults[pivot].hits += result.hits;
        groupedResults[pivot].errors += result.errors;
        groupedResults[pivot].total += result.total;

        return groupedResults;
      };
      /* eslint-disable no-param-reassign */

      // Function start
      this.loading = true;

      const [currentClasses, currentExams] = await Promise.all([
        this.$api.classes.getList({
          curso_id: this.currentCourseId,
        }),

        this.$api.exams.getList({
          curso_id: this.currentCourseId,
        }),
      ]);

      const courseResults = await Promise.all(currentClasses.map(
        async classObj => ({
          id: classObj.id,
          name: classObj.name,
          results: await this.$api.results.getListByClass(classObj.id),
        }),
      ));

      const resultsByClass = courseResults.map(
        item => ({
          id: item.id,
          name: item.name,
          results: Object.values(
            item.results.reduce(groupResults, {}),
          ),
        }),
      );

      this.chartData = resultsByClass;
      this.currentExamsList = currentExams;

      this.loading = false;
    },
  },

  created() {
    this.$store.dispatch('courses/fetchList');
  },
};
</script>

<style lang="scss" scoped>
  .loading::after {
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
