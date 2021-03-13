<template>
  <div>
    <template v-if="routePathChecker.mainBoard">
      <boardListWrap
        :board-list-header="listItems.title"
        v-for="(listItems, index) in boardListItems"
        :key="index"
        :list="listItems.list"
      ></boardListWrap>
    </template>
    <template
      v-else-if="
        routePathChecker.freeBoard || !routerName.includes('mainBoard')
      "
    >
      <div>
        <div class="tab_menu_area">
          <tab-menu :tabItems="tabItem" :main-page-show="false" />
        </div>
        <div class="board_content">
          <normalBoardListWrap :routeType="'front'"></normalBoardListWrap>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import boardListWrap from '@/components/board/main-board/board-list-wrap.vue';
import normalBoardListWrap from '@/components/board/normal-board/normal-board-wrap';
import tabMenu from '@/components/tab-menu.vue';

import {
  reactive,
  useContext,
  watchEffect,
  ref,
} from '@nuxtjs/composition-api';

export default {
  components: {
    boardListWrap,
    normalBoardListWrap,
    tabMenu,
  },
  setup() {
    const routePathChecker = reactive({
      mainBoard: false,
      freeBoard: false,
    });
    const { route } = useContext();
    const routerName = ref(route.value.path);
    watchEffect(() => {
      routePathChecker.mainBoard = route.value.path.includes('mainBoard');
      routePathChecker.freeBoard = route.value.path.includes('free');
    });
    const tabItem = reactive([
      {
        name: '자유게시판',
        field: 'TOP',
        active: true,
        link: '/board/fe/free',
      },
      { name: '질문과 답글', field: 'QA', active: false, link: '/board/fe/qa' },
      {
        name: '커리큘럼',
        field: 'BE',
        active: false,
        link: '/board/fe/curriculum',
      },
    ]);
    const boardListItems = reactive({
      notice: {
        title: '공지사항',
        list: [
          {
            categories: '공지사항',
            TITLE: '1월 15일 긴급 점검 공지',
            CONTENT: '콘텐츠입니다!!!!!!',
            REG_USER_ID: '관리자아이디',
            REG_DATE: '20210118',
          },
          {
            categories: '공지사항',
            TITLE: '1월 15일 긴급 점검 공지',
            CONTENT: '콘텐츠입니다!!!!!!',
            REG_USER_ID: '관리자아이디',
            REG_DATE: '20210118',
          },
          {
            categories: '공지사항',
            TITLE: '1월 15일 긴급 점검 공지',
            CONTENT: '콘텐츠입니다!!!!!!',
            REG_USER_ID: '관리자아이디',
            REG_DATE: '20210118',
          },
          {
            categories: '공지사항',
            TITLE: '1월 15일 긴급 점검 공지',
            CONTENT: '콘텐츠입니다!!!!!!',
            REG_USER_ID: '관리자아이디',
            REG_DATE: '20210118',
          },
          {
            categories: '공지사항',
            TITLE: '1월 15일 긴급 점검 공지',
            CONTENT: '콘텐츠입니다!!!!!!',
            REG_USER_ID: '관리자아이디',
            REG_DATE: '20210118',
          },
        ],
      },
      front: {
        title: 'Front',
        list: [
          {
            categories: '자유게시판',
            TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
            CONTENT: '내용입니다',
            REG_USER_ID: '14',
            REG_DATE: '20210118',
          },
          {
            categories: '자유게시판',
            TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
            CONTENT: '내용입니다',
            REG_USER_ID: '14',
            REG_DATE: '20210118',
          },
          {
            categories: '자유게시판',
            TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
            CONTENT: '내용입니다',
            REG_USER_ID: '14',
            REG_DATE: '20210118',
          },
          {
            categories: '자유게시판',
            TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
            CONTENT: '내용입니다',
            REG_USER_ID: '14',
            REG_DATE: '20210118',
          },
          {
            categories: '자유게시판',
            TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
            CONTENT: '내용입니다',
            REG_USER_ID: '14',
            REG_DATE: '20210118',
          },
        ],
      },
      backend: {
        title: 'Back-end',
        list: [
          {
            categories: '자유',
            TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
            CONTENT: '내용입니다',
            REG_USER_ID: '14',
            REG_DATE: '20210118',
          },
          {
            categories: '자유',
            TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
            CONTENT: '내용입니다',
            REG_USER_ID: '14',
            REG_DATE: '20210118',
          },
          {
            categories: '자유',
            TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
            CONTENT: '내용입니다',
            REG_USER_ID: '14',
            REG_DATE: '20210118',
          },
          {
            categories: '자유',
            TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
            CONTENT: '내용입니다',
            REG_USER_ID: '14',
            REG_DATE: '20210118',
          },
          {
            categories: '자유',
            TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
            CONTENT: '내용입니다',
            REG_USER_ID: '14',
            REG_DATE: '20210118',
          },
        ],
      },
      devops: {
        title: 'Dev-ops',
        list: [],
      },
    });
    return { boardListItems, routePathChecker, tabItem, route, routerName };
  },
};
</script>

<style lang="scss" scoped></style>
