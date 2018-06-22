<template>
  <div class="loading-overlay">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LoadingOverlay',
};
</script>

<style lang="scss" scoped>
  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;

    background: rgba(255, 255, 255, 0.75);
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 10;
  }
</style>
