<template>
  <div class="login-box">
    <div class="title">
      <div class="md-title">IFC Monitor</div>
    </div>

    <div class="actions md-layout md-alignment-center-space-between">
      <md-button :href="loginUrl" class="md-primary md-raised md-layout-item md-size-100">
        <font-awesome-icon :icon="['fab', 'google']" />
        ENTRAR
      </md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      notActivate: false,
      loginUrl: `${process.env.SERVER_URL}api/login/google`,
    };
  },

  // Redirect if logged in
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.$store.state.loggedIn) {
        next('/');
      }
    });
  },
};
</script>

<style lang="scss" scoped>
  .login-box {
    text-align: center;

    .title {
      margin-bottom: 16px;

      .md-title {
        font-size: 24px;
      }
    }
  }
</style>
