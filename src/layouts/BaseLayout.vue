<template>
  <div class="page-container base-layout">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="showNavigation = !showNavigation">
          <md-icon>menu</md-icon>
        </md-button>

        <app-toolbar />
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped" :md-active.sync="showNavigation">
        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import AppToolbar from '@/components/structure/AppToolbar';

export default {
  name: 'BaseLayout',

  data() {
    return {
      showNavigation: false,
    };
  },

  components: {
    AppToolbar,
  },
};
</script>

<style>

</style>
