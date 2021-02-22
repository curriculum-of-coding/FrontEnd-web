<template>
  <div class="main">
    <sideMenu v-if="!checkMainPage"></sideMenu>
    <div class="content_wrap">
      <div
        class="header border_bottom"
        :class="[this.route.name.includes('board') ? 'border_bottom' : '']"
      >
        <header-menu
          v-if="!checkMainPage"
          :header-title="headerItem"
          :main-page-show="true"
          @openModal="openModal"
        >
        </header-menu>
      </div>
      <div class="content" data-app="true">
        <Nuxt></Nuxt>
      </div>
      <commonAllUseModal
        @setModal="getModalStatus"
        :setModal="openModalCheck.value"
        :modal-content="modalContent.content"
        :modal-header="modalHeader.header"
      ></commonAllUseModal>
    </div>
  </div>
</template>

<script lang="ts">
import headerMenu from '~/components/ui/top-header.vue';
import sideMenu from '~/components/ui/side-menu.vue';
import commonAllUseModal from '~/components/common/common-vuetify-modal-all-use.vue';
import {
  useContext,
  computed,
  onMounted,
  watchEffect,
  reactive,
} from '@nuxtjs/composition-api';

export default {
  setup: function() {
    const { route } = useContext();
    let openModalCheck = reactive({ value: null });
    let modalHeader = reactive({ header: '' });
    let modalContent = reactive({ content: '' });

    const openModal = value => {
      modalContent.content = value;
      console.log(value, 'dasds');
      openModalCheck.value = !openModalCheck.value;
    };

    const getModalStatus = value => {
      openModalCheck.value = value;
    };

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
    return {
      route,
      checkMainPage,
      headerItem,
      openModal,
      getModalStatus,
      modalHeader,
      openModalCheck,
      modalContent,
    };
  },
  components: {
    sideMenu,
    headerMenu,
    commonAllUseModal,
  },
};
</script>
<style>
.modal_round {
  border-radius: 20px;
}
</style>
<style scoped lang="scss">
.border_bottom {
  border-bottom: 1px solid #dfdfdf;
}

.header {
  padding: 0 50px;
}
.content {
  padding-left: 50px;
  margin-top: 47px;
}
.content_wrap {
  width: calc(100% - 163px);
}

.main {
  display: flex;
  justify-content: space-between;
}
</style>
