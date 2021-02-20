<template>
  <Card class="account-sync-card">
    <div class="title">{{ accountType }} 연동</div>
    <div
      class="description"
      :class="{
        sync: isSync,
      }"
    >
      {{ description }}
    </div>
    <RoundedButton class="btn-sync" @click="onClickSyncButton">
      <template v-if="isSync">
        연동해제
      </template>
      <template v-else>
        연동하기
      </template>
    </RoundedButton>
  </Card>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api';
import Card from './Card.vue';
import RoundedButton from '../buttons/RoundedButton.vue';

export default defineComponent({
  components: {
    Card,
    RoundedButton,
  },
  props: {
    accountType: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    syncAccount: {
      type: String,
      default: undefined,
    },
  },
  setup(props, { emit }): any {
    const isSync = computed(() => props.syncAccount);

    const onClickSyncButton = (e: Event) => {
      emit('click-sync', e);
    };

    return {
      isSync,
      onClickSyncButton,
    };
  },
});
</script>

<style lang="scss" scoped>
.account-sync-card {
  display: inline-block;

  .title {
    font-size: 20px;
    color: #0d0d0d;
    letter-spacing: -1px;
    font-weight: bold;
  }
  .description {
    font-size: 16px;
    letter-spacing: -0.8px;
    color: #969696;
    font-weight: normal;

    &.sync {
      opacity: 0;
    }
  }
  .btn-sync {
    margin-top: 18px;
  }
}
</style>
