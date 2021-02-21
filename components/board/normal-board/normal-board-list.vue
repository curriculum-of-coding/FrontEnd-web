<template>
  <div class="table_area">
    <div class="information_area">
      <span class="border_bottom">전체 ({{ tableListItems.length }})</span>
      <commonBtnNotRadius :btnTitle="'글쓰기'" class="btn"></commonBtnNotRadius>
    </div>
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr v-for="listItems in list" :key="listItems.FFB_ID">
            <td>{{ listItems.TITLE }}</td>
            <td>{{ listItems.REG_USER_ID }}</td>
            <td>
              {{ listItems.REG_DATE | dateFormat('YYYY-MM-DD hh:mm:ss') }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import {} from '@nuxtjs/composition-api';
import commonBtnNotRadius from '@/components/common/common-button-not-radius.vue';

export default {
  name: 'normal-board-list',
  components: {
    commonBtnNotRadius,
  },
  props: {
    tableListItems: {
      type: Array,
    },
  },
  setup(props) {
    const list = props.tableListItems;
    return {
      list,
    };
  },
};
</script>
<style></style>
<style scoped lang="scss">
.table_area {
  .information_area {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14.5px;
    padding-bottom: 16.5px;
    border-bottom: 1px solid #38414b;

    .border_bottom {
      display: flex;
      align-items: flex-end;
      width: 100%;
      font-size: 14px;
      font-weight: 500;
    }
  }

  table {
    display: flex;
    flex-direction: column;
    tbody {
      tr {
        cursor: pointer;
      }
      td {
        padding: 0 10px;
        font-weight: 500;
        &:nth-child(1) {
          width: 70%;
        }

        &:nth-child(2) {
          width: 15%;
          text-align: center;
        }
        &:nth-child(3) {
          width: 15%;
          text-align: center;
        }
      }
    }
  }
}
</style>
