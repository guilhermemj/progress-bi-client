<template>
  <div class="centered-container">
    <md-content>
      <div class="md-elevation-3 content-wrapper">
        <router-view />
      </div>

      <div class="content-footer">
        <img src="http://i-3m-dev.a8e.net.br/static/images/logo-infra.png" alt="Powered by Infracommerce">
      </div>
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'CenteredLayout',
};
</script>

<style lang="scss">
.centered-container {
  position: relative;

  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  .md-content {
    position: relative;

    width: 100%;
    max-width: 400px;

    text-align: center;

    z-index: 1;
  }

  .content-wrapper {
    padding: 40px;
  }

  .content-footer {
    margin-top: 24px;
  }
}
</style>
