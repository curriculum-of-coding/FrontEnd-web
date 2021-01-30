<template>
  <div class="curriculum-comment">
    <div class="comment-header">
      <span>댓글 2</span>
      <font-awesome-icon icon="thumbs-up"/> 123
      <font-awesome-icon icon="thumbs-down"/> 20
    </div>
    <div class="comment-input">
      <input type="text" placeholder="댓글을 입력하세요.">
    </div>
    <div class="comment-list">
      <div class="comment">
        <div class="comment-header">
          <span class="comment-writer">댓글 작성자</span>
          <span class="comment-write-date">YYYY.MM.DD hh:mm:ss</span>
        </div>
        <div class="comment-contents">
          댓글내용입니다.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@nuxtjs/composition-api'
export default {
  setup() {
    const comments = ref([
      {
        wrtier: '모여봐요퇴근의숲',
        writeDate: Date.now(),
        contents: '비밀 댓글입니다.',
      },
      {
        wrtier: '늦잠',
        writeDate: Date.now(),
        contents: '비밀 댓글입니다.',
        reply: [
          {
            wrtier: '늦잠',
            writeDate: Date.now(),
            contents: '비밀 댓글입니다.',
          }
        ]
      },
    ])

    return {
      comments
    }
  }
}
</script>

<style lang="scss" scoped>
.curriculum-comment {
  padding: 45px 50px;
  background-color: white;
  border-radius: 10px;
  
  .comment-header {

  }

  .comment-input {
    border-style: solid;
    border-width: 1px;
    border-color: #B3B3B3;
    border-radius: 50px;

    margin-top: 31px;
    padding: 10px 30px 15px 30px;

    &>input {
      width: 100%;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>