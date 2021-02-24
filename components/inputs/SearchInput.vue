<template>
  <div class="search-input" :style="{ width: inputWidth }">
    <v-select
      class="btn-select"
      hide-details="auto"
      :items="items"
      :dense="true"
      v-model="tag"
    />
    <input
      class="input-text"
      type="text"
      placeholder="검색어를 입력해주세요."
    />
    <button class="btn-search">
      <font-awesome-icon icon="search" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api';
export default defineComponent({
  props: {
    inputWidth: {
      type: String,
    },
  },
  setup() {
    const items = reactive(['제목', '내용']);
    const tag = ref(items[0]);
    return {
      items,
      tag,
    };
  },
});
</script>

<style lang="scss" scoped>
.search-input {
  display: flex;
  align-items: center;
  padding: {
    top: 8px;
    right: 20px;
    bottom: 6px;
    left: 30px;
  }
  border-width: 1px;
  border-style: solid;
  border-color: #b3b3b3;
  border-radius: 50px;

  .btn-select {
    flex: 0 0 auto;
    width: 60px;

    margin-top: 0px;
    &::v-deep .v-input__slot {
      &::before,
      &::after {
        display: none;
      }
    }
  }
  .input-text {
    flex: 1;
    margin-left: 10px;

    &:focus {
      outline: none;
    }
  }
  .btn-search {
    color: #f64e5b;
  }
}
</style>
