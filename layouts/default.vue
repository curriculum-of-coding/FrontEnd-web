<template>
  <div class="main">
    <side-menu/>
    <Nuxt/>
  </div>
</template>

<script>
export {
  defineComponent, onMounted, onBeforeMount, ref, reactive, toRefs, computed, watch
} from '@vue/composition-api'
import sideMenu from '@/layouts/side-menu'

export default {
  data() {
    return {}
  },
  components: {
    sideMenu,
  }
}
</script>
<style lang="scss">
.main{
  display: flex;
}
</style>
