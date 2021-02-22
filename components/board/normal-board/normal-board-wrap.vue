<template>
  <div class="normal_list_wrap">
    <div class="list_area">
      <normalList :tableListItems="listItems.front.list"></normalList>
    </div>
  </div>
</template>

<script lang="ts">
import normalList from '@/components/board/normal-board/normal-board-list.vue';
import { reactive } from '@nuxtjs/composition-api';

export default {
  props: {
    routeType: {
      type: String,
    },
  },
  setup() {
    const listItems = reactive({
      front: {
        title: 'Front',
        list: [
          {
            FFB_ID: 1,
            categories: '자유게시판',
            TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
            CONTENT: '내용입니다',
            REG_USER_ID: '14',
            REG_DATE: '20210118',
          },
          {
            FFB_ID: 2,
            categories: '자유게시판',
            TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
            CONTENT: '내용입니다',
            REG_USER_ID: '14',
            REG_DATE: '20210118',
          },
          {
            FFB_ID: 3,
            categories: '자유게시판',
            TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
            CONTENT: '내용입니다',
            REG_USER_ID: '14',
            REG_DATE: '20210118',
          },
          {
            FFB_ID: 4,
            categories: '자유게시판',
            TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
            CONTENT: '내용입니다',
            REG_USER_ID: '14',
            REG_DATE: '20210118',
          },
          {
            FFB_ID: 5,
            categories: '자유게시판',
            TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
            CONTENT: '내용입니다',
            REG_USER_ID: '14',
            REG_DATE: '20210118',
          },
        ],
      },
    });

    return { listItems };
  },

  data() {
    return {};
  },
  components: {
    normalList,
  },
};
</script>

<style scoped lang="scss">
.normal_list_wrap {
  .list_area {
    margin-top: 70px;
  }
}
</style>
