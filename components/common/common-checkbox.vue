<template>
  <div>
    <div class="checkboxTitle">{{ headerTitle }}</div>
    <div class="common_checkbox_content" :class="[column ? 'column' : '']">
      <div v-for="(items, index) in checkBoxArray" :key="index">
        <label
          class="checkbox"
          style="--color: #FE3C53;"
          :style="{ marginRight: marginRight }"
        >
          <span class="checkbox_input">
            <input
              type="checkbox"
              v-model="checkBoxPicker"
              :id="items.id"
              :value="items.id"
              @change="setCheckbox(checkBoxPicker)"
            />
            <span class="checkbox_control">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  d="M1.73 12.91l6.37 6.37L22.79 4.59"
                />
              </svg>
            </span>
          </span>
          <span class="checkbox_value">
            {{ items.id }}
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@nuxtjs/composition-api';

export default {
  name: 'common-checkbox',

  props: {
    checkBoxArray: {
      type: Array,
    },
    checkBoxId: {
      type: Object,
    },
    column: {
      type: Boolean,
      default: false,
    },
    headerTitle: {
      type: String,
      default: '',
    },
    marginRight: {
      type: String,
      default: '10px',
    },
  },
  setup(props, { emit }) {
    let checkBoxPicker = reactive([]);
    const setCheckbox = value => {
      return emit('setCheckbox', value);
    };

    return { checkBoxPicker, setCheckbox };
  },
};
</script>
<style lang="scss" scoped>
.checkboxTitle {
  text-align: left;
  font: normal normal normal 18px/24px NanumSquareRound;
  letter-spacing: -0.9px;
  color: #0d0d0d;
}

.common_checkbox_content {
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;

  &.column {
    flex-direction: column;
  }

  .checkbox {
    grid-template-columns: min-content auto;
    grid-gap: 0.5em;
    display: flex;
    align-items: center;
    color: #fff;
    margin-right: 10px;

    &--disabled {
      background: none;
      color: #fff;
    }
  }

  .checkbox_control {
    display: inline-grid;
    width: 1em;
    height: 1em;
    border-radius: 0.25em;
    border: 1px solid var(--color);

    svg {
      transition: transform 0.1s ease-in 25ms;
      transform: scale(0);
      transform-origin: bottom left;
    }
  }

  .checkbox_input {
    display: grid;
    grid-template-areas: 'checkbox';

    > * {
      grid-area: checkbox;
    }

    input {
      opacity: 0;
      width: 1em;
      height: 1em;

      &:focus + .checkbox_control {
        box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor;
      }

      &:checked + .checkbox_control svg {
        transform: scale(1);
      }

      &:checked + .checkbox_control {
        background: var(--color);
      }
    }
  }
}

.checkbox_value {
  font-weight: 100;
  color: #000 !important;
}
</style>
