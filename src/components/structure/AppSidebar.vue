<template>
  <div>
    <md-list>
      <md-list-item v-for="(link) in links" :key="`${link.name}${link.to}`">
        <md-icon>{{link.icon}}</md-icon>
        <span class="md-list-item-text">Inbox</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import links from './SidebarLinks';

export default {
  name: 'AppSidebar',

  data() {
    return {
      links,
    };
  },
};
</script>

<style>

</style>
