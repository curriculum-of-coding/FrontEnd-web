<template>
  <div class="board_list_wrap">
    <table class="board_list" v-if="listItem.length > 0">
      <tbody>
        <tr v-for="(items, index) in listItem" :key="index" class="tr_list">
          <td>{{ items.categories }}</td>
          <td>{{ items.TITLE }}</td>
          <td>{{ items.REG_USER_ID }}</td>
          <td>{{ items.REG_DATE | dateFormat('YYYY-MM-DD hh:mm:ss') }}</td>
        </tr>
      </tbody>
    </table>
    <table v-else>
      <tbody class="no_have_list_wrap">
        <tr class="no_have_list">
          <td>작성된 게시글이 없습니다.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {} from '@nuxtjs/composition-api';

export default {
  name: 'board-list',
  props: {
    listItem: {
      type: Array,
    },
  },
  setup() {
    const listData = () => {};
    return { listData };
  },
};
</script>

<style lang="scss" scoped>
.board_list_wrap {
  border: 1px solid #dfdfdf;
  opacity: 1;
  width: 100%;
  margin-bottom: 92px;
  padding: 40px 50px;
  .board_list {
    height: 260px;
    .tr_list {
      border-bottom: 20px solid #fff;
      &:last-child {
        border: none;
      }

      td {
        font-weight: 500;
        &:nth-child(1) {
          width: 113px;
        }
        &:nth-child(2) {
          width: 912px;
        }
        &:nth-child(3) {
          width: 110px;
          text-align: center;
        }
        &:nth-child(4) {
          width: 202px;
          text-align: center;
        }
      }
    }
  }

  .no_have_list_wrap {
    height: 100px;
    .no_have_list {
      display: flex;
      align-items: center;
      justify-content: center;
      td {
        text-align: left;
        font: normal normal normal 18px/26px NanumSquareRound;
        letter-spacing: 0;
        color: #858585;
        opacity: 1;
      }
    }
  }
}
</style>
