<template>
  <md-card :class="{ loading }">
    <md-card-header>
      <h2 class="md-title">Notas por aluno</h2>
    </md-card-header>

    <md-card-content>
      <form class="form">
        <md-field>
          <label for="class-select">Escolha uma turma</label>

          <md-select id="class-select" class="form-control" v-model="currentClassId">
            <md-option value="" disabled hidden />

            <md-option v-for="item of classesList" :key="item.id" :value="item.id">
              {{item.name}}
            </md-option>
          </md-select>
        </md-field>
      </form>

      <BaseChart :chart-config="chartConfig" />
    </md-card-content>

    <md-progress-bar md-mode="indeterminate" class="loader" v-show="loading" />
  </md-card>
</template>

<script>
import {
  mapGetters as mapStoreGetters,
} from 'vuex';

import {
  getRandomInt,
  repeat,
  sortBy,
} from '@/utils';

import BaseChart from '@/components/general/BaseChart';

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

export default {
  name: 'GradesByStudentChart',

  components: {
    BaseChart,
  },

  data() {
    return {
      loading: true,

      currentClassId: null,
      currentStudentsList: [],
      currentExamsList: [],
      currentResultsList: [],
    };
  },

  computed: {
    ...mapStoreGetters('classes', {
      classesList: 'sortedList',
    }),

    chartConfig() {
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

      const getGrade = ({ hits, errors }) => {
        const total = hits + errors;

        return (10 * (hits / total)).toFixed(2);
      };

      return {
        ...BASE_CHART_OPTIONS,

        data: {
          labels: this.currentExamsList.map(exam => exam.name),
          datasets: this.currentStudentsList.map(
            (student) => {
              const resultList = this.currentResultsList
                .filter(result => result.student.id === student.id)
                .reduce(groupResults, {});

              return {
                label: student.ra,
                data: Object.values(resultList).sort(sortBy('examName')).map(getGrade),

                borderWidth: 1,
                fill: false,
                ...getRandomColors(),
              };
            },
          ),
        },
      };
    },
  },

  watch: {
    // Init filter with store
    classesList() {
      if (!this.currentClassId && this.classesList.length > 0) {
        this.currentClassId = this.classesList[0].id;
      }
    },

    currentClassId() {
      this.fetchChartInfo();
    },
  },

  methods: {
    async fetchChartInfo() {
      this.loading = true;

      const [studentsList, examsList] = await Promise.all([
        this.$api.students.getList({ turma_id: this.currentClassId }),
        this.$api.exams.getList({ turma_id: this.currentClassId }),
      ]);

      const resultList = await this.$api.results.getList({
        aluno_id: studentsList.map(student => student.id),
        prova_id: examsList.map(exam => exam.id),
      });

      // O estado do componente é atualizado de uma só vez
      this.currentStudentsList = studentsList.sort(sortBy('ra'));
      this.currentExamsList = examsList.sort(sortBy('id'));
      this.currentResultsList = resultList.sort(sortBy(result => result.exam.id));
      this.loading = false;
    },
  },

  created() {
    this.$store.dispatch('classes/fetchList');
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
