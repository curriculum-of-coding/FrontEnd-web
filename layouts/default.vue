<template>
  <div class="main">
    <sideMenu v-if="!checkMainPage"></sideMenu>
    <div class="content_wrap">
      <div
        class="header"
        :class="[this.route.name.includes('board') ? 'border_bottom' : '']"
      >
        <header-menu
          v-if="!checkMainPage"
          :header-title="headerItem"
          :main-page-show="true"
        >
        </header-menu>
      </div>
      <div class="content" data-app="true">
        <Nuxt></Nuxt>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import headerMenu from '~/components/ui/top-header.vue';
import sideMenu from '~/components/ui/side-menu.vue';
import {
  useContext,
  computed,
  onMounted,
  watchEffect,
} from '@nuxtjs/composition-api';

export default {
  setup() {
    const { route } = useContext();
    const checkMainPage = computed(() => {
      return (
        route.value.path.includes('login') ||
        route.value.path.includes('signup')
      );
    });

    const headerItem = [
      {
        title: '커리큘럼',
        subTitle: '이런 강의는 어떠신가요? 현직자들이 추천하는 커리큘럼입니다.',
      },
    ];
    onMounted(() => {
      watchEffect(() => {
        route.value.path.includes('user')
          ? (document.body.style.background = '#354151')
          : (document.body.style.background = '#ffffff');
      });
    });
    return { route, checkMainPage, headerItem };
  },
  components: {
    sideMenu,
    headerMenu,
  },
};
</script>
<style scoped lang="scss">
.border_bottom {
  border-bottom: 1px solid #dfdfdf;
}

.content,
.header {
  padding: 0 50px;
}

.content_wrap {
  width: calc(100% - 163px);
}

.main {
  display: flex;
  justify-content: space-between;
}
</style>
