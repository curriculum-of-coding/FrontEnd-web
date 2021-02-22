<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({});
</script>
<style lang="scss" scoped>
.card {
  box-shadow: 0px 0px 10px #0000001a;
  padding: {
    top: 30px;
    right: 20px;
    bottom: 30px;
    left: 20px;
  }
  border-radius: 10px;
}
</style>
