<template>
  <div class="page-curriculum">
    <div class="curriculum-title">
      <h1>제목입니다.</h1>
    </div>
    <div class="curriculum-area">
      <CurriculumIndex class="curriculum-index" :list="indexList" />
      <div class="curriculum-content-wrap">
        <CurriculumContent class="curriculum-content" />
        <CurriculumComment class="curriculum-comment" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@nuxtjs/composition-api';
import CurriculumIndex from '../components/curriculum/detail/curriculum-index.vue';
import CurriculumContent from '../components/curriculum/detail/curriculum-content.vue';
import CurriculumComment from '../components/curriculum/detail/curriculum-comment.vue';

export default {
  components: {
    CurriculumIndex,
    CurriculumContent,
    CurriculumComment,
  },
  setup() {
    const indexList = ref([
      '소개',
      '어떤 언어로 시작하는것이 좋을까?',
      '코딩의 기초와 편집기',
      '데이터베이스와 데이터 타입',
    ]);
    return {
      indexList,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-curriculum {
  .curriculum-title {
    padding: {
      bottom: 30px;
    }
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #dfdfdf;

    h1 {
      text-align: left;
      font: normal normal bold 24px/32px NanumSquareRound;
      letter-spacing: -1.2px;
      color: #0d0d0d;
    }
  }
  .curriculum-area {
    display: flex;

    .curriculum-index {
      flex: 0 0 auto;
      width: 372.5px;
      padding: {
        left: 72px;
        right: 83.5px;
      }
    }
    .curriculum-content-wrap {
      flex: 1;
      background-color: #f6f6f6;
      padding: {
        top: 40px;
        right: 50px;
        bottom: 63px;
        left: 50px;
      }
      border-left-style: solid;
      border-left-width: 1px;
      border-left-color: #dfdfdf;

      .curriculum-comment {
        margin-top: 30px;
      }
    }
  }
}
</style>
