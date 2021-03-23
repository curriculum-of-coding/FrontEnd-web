<template>
  <v-row justify="center" class="common_notification_modal">
    <v-dialog
      v-model="notificationStore.notification"
      persistent
      width="500px"
      height="500"
      class="modal"
      content-class="modal_round"
    >
      <v-card>
        <v-card-title class="headline">
          <span v-if="notificationStore.notificationCode === 0">
            오류
          </span>
          <span v-if="notificationStore.notificationCode === 1"> 성공</span>
        </v-card-title>

        <v-card-text>
          <div>
            {{ notificationStore.notificationContent }}
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="close">
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { useContext, computed } from '@nuxtjs/composition-api';

export default {
  name: 'common-notification-modal',
  setup() {
    const { store } = useContext();
    const notificationStore = computed(
      () => store.state.notificationModal.notificationOption,
    );
    const close = () => {
      store.dispatch('notificationModal/setNotificationOption', {
        notification: false,
      });
    };

    return {
      close,
      notificationStore,
    };
  },
};
</script>

<style scoped lang="scss"></style>
