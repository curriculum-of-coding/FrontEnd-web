<template>
  <div class="comment">
    <font-awesome-icon class="reply-icon" v-if="isReply" icon="comment-dots" />
    <div class="comment-wrap">
      <div class="comment-header">
        <span class="comment-writer">{{ writer }}</span>
        <span class="comment-write-date">{{ formattedWriteDate }}</span>
      </div>
      <div class="comment-contents">
        {{ contents }}
      </div>
      <div v-if="replys" class="comment-reply-list">
        <Comment
          v-for="(reply, i) in replys"
          :writer="reply.writer"
          :write-date="reply.writeDate"
          :contents="reply.contents"
          :replys="reply.replys"
          :key="i"
          :is-reply="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@nuxtjs/composition-api';

const formatDigits = (str, digits) => {
  str = '0'.repeat(digits) + str;
  return str.substring(str.length - digits);
};
export default {
  name: 'Comment',
  props: {
    writer: {
      type: String,
      required: true,
    },
    writeDate: {
      type: [Date, String, Number],
      required: true,
    },
    contents: {
      type: String,
      required: true,
    },
    replys: {
      type: Array,
      default: undefined,
    },
    isReply: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const formattedWriteDate = computed(() => {
      let date = props.writeDate;
      if (typeof date === 'number') {
        date = new Date(date);
      }
      if (date instanceof Date) {
        date = `${date.getFullYear()}.${formatDigits(
          date.getMonth(),
          2,
        )}.${formatDigits(date.getDate(), 2)} ${formatDigits(
          date.getHours(),
          2,
        )}:${formatDigits(date.getMinutes(), 2)}:${formatDigits(
          date.getSeconds(),
          2,
        )}`;
      }
      return date;
    });
    return {
      formattedWriteDate,
    };
  },
};
</script>

<style lang="scss" scoped>
.comment {
  margin-top: 25px;
  display: flex;

  .reply-icon {
    margin-right: 12px;
  }
  header .comment-header {
    .comment-writer {
      font-size: 18px;
      font-weight: bold;
    }
    .comment-write-date {
      font-size: 16px;
      color: #969696;
      vertical-align: bottom;
      font-weight: normal;
    }
  }
  .comment-contents {
    margin: {
      top: 13px;
    }
    font-size: 16px;
    color: #969696;
    font-weight: normal;
  }
}
</style>
