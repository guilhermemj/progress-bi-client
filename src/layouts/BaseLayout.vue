<template>
  <div class="page-container md-layout-column base-layout">
    <md-app>
      <md-app-toolbar class="md-primary">
        <!-- <md-button class="md-icon-button" @click="showNavigation = !showNavigation">
          <md-icon>menu</md-icon>
        </md-button> -->

        <app-toolbar />
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="showNavigation">
        <app-sidebar />
      </md-app-drawer>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import AppToolbar from '@/components/structure/AppToolbar';
import AppSidebar from '@/components/structure/AppSidebar';

export default {
  name: 'BaseLayout',

  data() {
    return {
      showNavigation: false,
    };
  },

  components: {
    AppToolbar,
    AppSidebar,
  },
};
</script>

<style lang="scss">
  .md-app {
    min-height: 100vh;
  }
</style>
