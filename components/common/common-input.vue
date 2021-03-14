<template>
  <div class="custom_input">
    <label :for="inputLabelID">
      {{ inputLabelID }}
      <input
        :style="{ width: inputWidth, borderRadius: inputBorderRadius }"
        :type="inputType"
        :id="inputLabelID"
        :placeholder="placeholder"
        @blur="focusOutEvent($event.target.value)"
        @input="updateValue($event.target.value)"
      />
    </label>
    <span class="validation" :class="[signupPageNopadding ? 'actvie' : '']">
      <span v-show="!validation">
        {{ validationContent }}
      </span>
      <div class="defalut_validation_area" v-if="defalutValidation">
        <font-awesome-icon icon="check" class="check_icon" />
        <span>{{ defalutValidationText }}</span>
      </div>
    </span>
  </div>
</template>

<script>
import {} from '@nuxtjs/composition-api';

export default {
  name: 'common-select',
  props: {
    inputLabelID: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      default: 'text',
    },
    validation: {
      default: true,
    },
    validationContent: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    inputWidth: {
      type: String,
    },
    inputBorderRadius: {
      type: String,
    },
    defalutValidation: {
      type: Boolean,
      default: false,
    },
    defalutValidationText: {
      type: String,
      default: '',
    },
    signupPageNopadding: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const selectOptionPicker = '';
    const updateValue = value => {
      return emit('SetInputValue', value);
    };
    const focusOutEvent = value => {
      return emit('SetInputValueFocusOut', value);
    };
    return { updateValue, selectOptionPicker, focusOutEvent };
  },
};
</script>

<style lang="scss" scoped>
.custom_input {
  label {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: left;
    font: normal normal normal 18px/24px NanumSquareRound;
    letter-spacing: -0.9px;
    color: #0d0d0d;

    input {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      border: 1px solid #b3b3b3;
      height: 40px;
      border-radius: 5px;
      outline: none;
      padding: 0 24px;
      &::placeholder {
        color: #b3b3b3;
        font-size: 14px;
      }
    }
  }

  .validation {
    padding-bottom: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    &.actvie {
      padding-bottom: 0;
      margin-top: 0;
    }

    .defalut_validation_area {
      margin-left: 15px;
      span {
        font: normal normal normal 14px/16px NanumSquareRound;
        color: #000000;
        font-weight: 500;
      }
      .check_icon {
        color: #f64e5b;
      }
    }

    span {
      text-align: left;
      font: normal normal normal 14px/19px NanumSquareRound;
      letter-spacing: -0.7px;
      color: #f64e5b;
      opacity: 1;
    }
  }
}
</style>
