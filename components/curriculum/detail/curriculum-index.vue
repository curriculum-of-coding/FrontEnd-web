<template>
  <article class="curriculum-index">
    <h2>INDEX</h2>
    <ol class="curriculum-list">
      <li v-for="(item, index) in list" :key="item">
        {{index}}. {{ item }}
      </li>
    </ol>
  </article>
</template>

<script lang="ts">
export default {
  props: {
    list: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.curriculum-index {
  & > h2 {
    margin-top: 51.5px;
    text-align: left;
    font-size: 24px;
    font-weight: bolder;
    letter-spacing: -1.2px;
    color: #0D0D0D;
    margin: {
      bottom: 27px;
    }
  }
  .curriculum-list {
    li {
      text-align: left;
      font-size: 16px;
      font-weight: normal;
      letter-spacing: 0px;
      color: #969696;
      margin: {
        bottom: 17px;
      }

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
  }
}
</style>