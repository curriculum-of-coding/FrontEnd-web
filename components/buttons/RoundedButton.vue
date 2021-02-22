<template>
  <button class="btn-rounded">
    <slot />
  </button>
</template>

<script lang="typescript">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({

});
</script>

<style lang="scss" scoped>
.btn-rounded {
  font-weight: normal;
  display: inline-block;
  background-color: #f64e5b;
  width: 434px;
  height: 50px;
  color: white;
  font-size: 14px;
  border-radius: 50px;
}
</style>
