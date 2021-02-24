<template>
  <label :for="selectLabelID">
    {{ selectLabelID }}
    <select
      class="select"
      :id="selectLabelID"
      v-model="selectOptionPicker"
      v-on:input="updateValue($event.target.value)"
    >
      <option
        v-for="(item, index) in selectOptions"
        :key="index"
        :value="item.PWD_QUEST_TYPE"
      >
        {{ item.options }}
      </option>
    </select>
  </label>
</template>

<script>
import {} from '@nuxtjs/composition-api';

export default {
  name: 'common-select',
  props: {
    selectOptions: {
      type: Array,
    },
    selectLabelID: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const selectOptionPicker = 0;
    const updateValue = value => {
      return emit('setSelectPW', value);
    };
    return { updateValue, selectOptionPicker };
  },
};
</script>

<style lang="scss" scoped>
label {
  text-align: left;
  font: normal normal normal 18px/24px NanumSquareRound;
  letter-spacing: -0.9px;
  color: #0d0d0d;
  .select {
    font-size: 14px;
    margin-top: 10px;
    width: 100%;
    border: 1px solid #b3b3b3;
    border-radius: 50px;
    opacity: 1;
    height: 40px;
    background: url('~assets/img/common-img/arrow.png') no-repeat 95%;
    outline: none;
    padding: 0 24px;
    margin-bottom: 24px;
  }
}
</style>
