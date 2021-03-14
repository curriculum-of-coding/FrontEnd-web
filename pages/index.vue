<template>
  <div class="main_page">
    <tab-menu :tabItems="tabItem" :main-page-show="true" />
    <curriculum-wrap></curriculum-wrap>
    <common-pagination :page="5" :total-page="5"> </common-pagination>
  </div>
</template>

<script lang="ts">
import tabMenu from '@/components/tab-menu.vue';
import curriculumWrap from '~/components/curriculum/curriculum-content-wrap.vue';
import commonPagination from '~/components/common/common-pagination.vue';
import { reactive } from '@nuxtjs/composition-api';

export default {
  setup() {
    const tabItem = reactive([
      { name: '분야별 TOP1', field: 'TOP', active: false, link: '' },
      { name: 'Front-end', field: 'FE', active: true, link: '' },
      { name: 'Back-end', field: 'BE', active: false, link: '' },
      { name: 'Dev-ops', field: 'DO', active: false, link: '' },
    ]);

    return { tabItem };
  },

  components: {
    tabMenu,
    commonPagination,
    curriculumWrap,
  },
};
</script>
<style lang="scss"></style>
