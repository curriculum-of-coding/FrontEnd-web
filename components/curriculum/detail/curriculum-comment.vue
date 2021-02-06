<template>
  <div class="curriculum-comment">
    <div class="comment-header">
      <span class="comment-text">댓글 2</span>
      <span class="thumbs-up"><font-awesome-icon icon="thumbs-up" /> 123</span>
      <span class="thumbs-down">
        <font-awesome-icon icon="thumbs-down" /> 20
      </span>
    </div>
    <div class="comment-input">
      <input type="text" placeholder="댓글을 입력하세요." />
    </div>
    <div class="comment-list">
      <Comment
        v-for="(comment, i) in comments"
        :writer="comment.writer"
        :write-date="comment.writeDate"
        :contents="comment.contents"
        :replys="comment.replys"
        :key="i"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@nuxtjs/composition-api';

import Comment from '@/components/comment.vue';

export default {
  components: {
    Comment,
  },
  setup() {
    const comments = ref([
      {
        writer: '모여봐요퇴근의숲',
        writeDate: Date.now(),
        contents: '비밀 댓글입니다.',
      },
      {
        writer: '늦잠',
        writeDate: Date.now(),
        contents: '비밀 댓글입니다.',
        replys: [
          {
            writer: '마루',
            writeDate: Date.now(),
            contents: '비밀 댓글입니다.',
            replys: [
              {
                writer: 'Leth',
                writeDate: Date.now(),
                contents: 'ㅋㅋㅋㅋㅋㅋ',
                replys: [
                  {
                    writer: '늦잠',
                    writeDate: Date.now(),
                    contents: '비밀 댓글입니다.',
                    replys: [
                      {
                        writer: '늦잠',
                        writeDate: Date.now(),
                        contents: '비밀 댓글입니다.',
                        replys: [
                          {
                            writer: '늦잠',
                            writeDate: Date.now(),
                            contents: '비밀 댓글입니다.',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                writer: 'KJC',
                writeDate: Date.now(),
                contents: 'ㅋㅋㅋㅋㅋㅋ',
              },
            ],
          },
          {
            writer: '린',
            writeDate: Date.now(),
            contents: '비밀 댓글입니다.',
          },
        ],
      },
      {
        writer: '웹린이',
        writeDate: Date.now(),
        contents: '강의 개못하네요 ㅋㅋ',
      },
    ]);

    return {
      comments,
    };
  },
};
</script>

<style lang="scss" scoped>
.curriculum-comment {
  padding: 45px 50px;
  background-color: white;
  border-radius: 10px;

  .comment-header {
    font-size: 20px;
    .comment-text {
      margin-right: 28px;
    }
    .thumbs-up {
      color: #0393ee;
      margin-right: 36px;
    }
    .thumbs-down {
      color: #f64e5b;
    }
  }

  .comment-input {
    border-style: solid;
    border-width: 1px;
    border-color: #b3b3b3;
    border-radius: 50px;

    margin-top: 31px;
    padding: 10px 30px 15px 30px;

    & > input {
      width: 100%;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
