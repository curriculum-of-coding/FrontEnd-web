<template>
  <div class="main_page">
    <header-menu :header-title="headerItems"
                 :main-page-show="true"></header-menu>
    <tab-menu :tabItems="tabItem"
              :main-page-show="true"/>
    <curriculum-title></curriculum-title>
  </div>
</template>

<script >
import tabMenu from "@/components/tab-menu.vue"
import headerMenu from '@/components/header.vue'
import curriculumTitle from '@/components/curriculum-title.vue'

export default {
  data() {
    return {
      tabItem: [
        {name: '분야별 TOP1', field: 'TOP', active: false},
        {name: 'Front-end', field: 'FE', active: true},
        {name: 'Back-end', field: 'BE', active: false},
        {name: 'Dev-ops', field: 'DO', active: false}
      ],
      headerItems: [
        {title: '커리큘럼', subTitle: '이런 강의는 어떠신가요? 현직자들이 추천하는 커리큘럼입니다.'}
      ]
    }
  },
  components: {
    tabMenu,
    headerMenu,
    curriculumTitle
  }
}
</script>
<style lang="scss">
.main_page {
  padding: 0 0 0 50px;
  width: 100%;
}
</style>
