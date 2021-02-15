<template>
  <div class="common_content_header">
    <dl>
      <dt>{{ title }}</dt>
      <dd>{{ subTitle }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'common-content-header',
  props: {
    title: String,
    subTitle: String,
  },
};
</script>

<style lang="scss" scoped>
.common_content_header {
  dl {
    margin-top: 68.5px;

    dt {
      text-align: left;
      font: normal normal normal 20px/23px NanumSquareRound;
      letter-spacing: -1px;
      color: #0d0d0d;
      opacity: 1;
      margin-bottom: 12px;
    }

    dd {
      text-align: left;
      font: normal normal normal 16px/18px NanumSquareRound;
      letter-spacing: -0.8px;
      color: #969696;
      opacity: 1;
    }
  }
}
</style>
