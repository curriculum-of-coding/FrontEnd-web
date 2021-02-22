<template>
  <div>
    <div class="checkboxTitle">{{ headerTitle }}</div>
    <div class="common_checkbox_content" :class="[column ? 'column' : '']">
      <label class="checkbox" style="--color: #FE3C53;">
        <span class="checkbox_input">
          <input type="checkbox" />
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
          모두 동의
        </span>
      </label>
      <div
        v-for="(items, index) in checkBoxArray"
        :key="index"
        class="checkbox_flex"
      >
        <label class="checkbox" style="--color: #FE3C53;">
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
            <span>{{ items.id }}</span>
          </span>
        </label>
        <span @click="openModal(items.contentType)">
          {{ items.contentType }}</span
        >
      </div>
      <commonModal
        @setModal="getModalStatus"
        :setModal="openModalCheck.value"
        :modal-header="modalHeader.header"
      ></commonModal>
    </div>
  </div>
</template>

<script>
import commonModal from '@/components/common/common-vuetify-only-user-modal';
import { reactive } from '@nuxtjs/composition-api';

export default {
  name: 'common-checkbox-signup',
  components: {
    commonModal,
  },
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
  },
  setup(props, { emit }) {
    let openModalCheck = reactive({ value: null });
    let modalHeader = reactive({ header: '' });
    const checkBoxPicker = reactive([]);

    const setCheckbox = value => {
      return emit('setCheckbox', value);
    };
    const openModal = value => {
      modalHeader.header = value;
      openModalCheck.value = !openModalCheck.value;
    };
    const getModalStatus = value => {
      openModalCheck.value = value;
    };
    return {
      checkBoxPicker,
      setCheckbox,
      openModal,
      openModalCheck,
      getModalStatus,
      modalHeader,
    };
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
    margin-bottom: 16px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #000 !important;
  font-weight: 100;
  span {
    font-weight: 100;
  }
}

.checkbox_flex {
  display: flex;
  justify-content: space-between;
}
</style>
