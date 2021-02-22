<template>
  <div class="board_wrap">
    <div class="board_list_header">
      {{ boardListHeader }}
    </div>
    <boardList :listItem="list"></boardList>
  </div>
</template>

<script>
import {} from '@nuxtjs/composition-api';
import boardList from '@/components/board/main-board/board-list.vue';

export default {
  name: 'board-list-wrap',
  components: {
    boardList,
  },
  props: {
    boardListHeader: {
      type: String,
      default: '',
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.board_wrap {
  .board_list_header {
    text-align: left;
    font: normal normal 800 20px/23px NanumSquareRound;
    color: #0d0d0d;
    margin-bottom: 20px;
  }
  margin-top: 68.5px;
}
</style>
