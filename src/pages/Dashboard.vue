<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item md-xsmall-size-100 md-small-size-100">
        <grades-by-class-chart />
      </div>

      <div class="md-layout-item md-xsmall-size-100 md-small-size-100">
        <grades-by-student-chart />
      </div>
    </div>
  </div>
</template>

<script>
import GradesByStudentChart from '@/components/dashboard/GradesByStudentChart';
import GradesByClassChart from '@/components/dashboard/GradesByClassChart';

export default {
  name: 'Dashboard',

  components: {
    GradesByStudentChart,
    GradesByClassChart,
  },
};
</script>
