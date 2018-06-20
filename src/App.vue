<template>
  <div id="app" @change-layout="changeLayout($event)">
    <component :is="currentLayout" />
  </div>
</template>

<script>
import { mapState as mapStoreState } from 'vuex';
import '@/components/vendor';

import layouts from '@/layouts';

export default {
  name: 'App',

  data() {
    return {
      currentLayout: layouts.default,
    };
  },

  computed: {
    ...mapStoreState([
      'loggedIn',
      'blockHeader',
      'fullScreenMode',
    ]),
  },

  method: {
    changeLayout(nextLayout) {
      if (nextLayout in layouts && layouts[nextLayout] !== this.currentLayout) {
        this.currentLayout = layouts[nextLayout];
      }
    },
  },
};
</script>

<style lang="scss">
  // Material Theme Configuration
  @import "~vue-material/dist/theme/engine";

  @include md-register-theme("default", (
    primary: md-get-palette-color(amber, 500),
    accent: md-get-palette-color(grey, 700)
  ));

  @import "~vue-material/dist/theme/all";
</style>
