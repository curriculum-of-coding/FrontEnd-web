<template>
  <div class="content_form">
    <div class="flex_item">
      <commonInput
        :inputWidth="'727px'"
        :inputLabelID="'제목'"
        @SetInputValue="getInputTitleValue"
      ></commonInput>
    </div>
    <tiny :headerTitle="'소개'" @setValue="getValue"></tiny>
  </div>
</template>

<script>
import commonInput from '@/components/common/common-input';
import tiny from '@/components/tinyEdtor/tiny.vue';
import { reactive } from '@nuxtjs/composition-api';

export default {
  components: {
    commonInput,
    tiny,
  },
  setup(props, { emit }) {
    const contentValue = reactive({
      title: '',
      content: '',
    });
    const getInputTitleValue = value => {
      contentValue.title = value;
      emit('getInputValue', contentValue.title);
    };
    const getValue = value => {
      contentValue.content = value;
      emit('getTinyValue', contentValue.content);
    };

    return { getValue, contentValue, getInputTitleValue };
  },
  name: 'curriculum-comment-form',
};
</script>

<style lang="scss" scoped>
.content_form {
  margin-top: 50px;
  .flex_item {
    display: flex;
    gap: 20px;
    justify-content: flex-start;
  }
}
</style>
