<template>
  <div class="main_page">
    <tab-menu :tabItems="tabItem" :main-page-show="true" />
    <curriculum-wrap></curriculum-wrap>
  </div>
</template>

<script lang="ts">
import tabMenu from '@/components/tab-menu.vue';
import curriculumWrap from '~/components/curriculum/curriculum-content-wrap.vue';

export default {
  setup() {
    const tabItem = [
      { name: '분야별 TOP1', field: 'TOP', active: false },
      { name: 'Front-end', field: 'FE', active: true },
      { name: 'Back-end', field: 'BE', active: false },
      { name: 'Dev-ops', field: 'DO', active: false },
    ];
    return { tabItem };
  },

  data() {
    return {};
  },
  components: {
    tabMenu,
    curriculumWrap,
  },
};
</script>
<style lang="scss"></style>
