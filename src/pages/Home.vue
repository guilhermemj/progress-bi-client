<template>
  <div>
    <div class='row'>
      <div class='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
          <div class='info-box bg-purple'>
              <div class='icon'>
                  <i class='material-icons'>dashboard</i>
              </div>
              <div class='content'>
                  <div class='text'>PROJETOS</div>
                  <div class='number count-to' v-html="projects"></div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      projects: '<i class="fas fa-ellipsis-h"></i>',
    };
  },

  mounted() {
    this.$http.get('/projects').then((response) => {
      this.projects = response.data.projects.length;
    });
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
