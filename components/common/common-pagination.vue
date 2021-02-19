<template>
  <div class="pagination">
    <ul class="pagination_content">
      <li @click="pageFirst">
        <font-awesome-icon icon="angle-double-left" class="font_arrow" />
      </li>
      <li @click="pageDecrease">
        <font-awesome-icon icon="angle-left" class="font_arrow" />
      </li>
      <li
        v-for="(pageItem, index) in page"
        :key="index"
        class="page_item"
        @click="getPage"
        :class="{ active: activePageId.page === index }"
      >
        {{ index + 1 }}
      </li>
      <li @click="pageIncrease">
        <font-awesome-icon icon="angle-right" class="font_arrow" />
      </li>
      <li @click="pageLast">
        <font-awesome-icon icon="angle-double-right" class="font_arrow" />
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from '@nuxtjs/composition-api';

export default {
  name: 'common-pagination ',
  props: {
    page: {
      type: Number,
      required: true,
    },
    totalPage: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    let activePageId = reactive({ page: 0 });
    const getPage = e => {
      activePageId.page = Number(e.target.innerHTML.trim() - 1);
    };
    const pageIncrease = () => {
      console.log(activePageId.page + 1);
      if (activePageId.page + 1 < props.totalPage) activePageId.page++;
    };
    const pageDecrease = () => {
      if (activePageId.page > 0) activePageId.page--;
    };
    const pageFirst = () => {
      activePageId.page = 0;
    };
    const pageLast = () => {
      activePageId.page = props.totalPage - 1;
    };
    return {
      getPage,
      activePageId,
      pageIncrease,
      pageDecrease,
      pageLast,
      pageFirst,
    };
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 100px;
  .pagination_content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      margin-right: 20px;
      cursor: pointer;
    }
    .page_item {
      border-radius: 50%;
      width: 22px;
      text-align: center;
      height: 22px;
      font-size: 14px;
      font-weight: 100;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000000;
      &.active {
        background: #f64e5b;
        color: #ffffff;
      }
    }
  }
}
</style>
