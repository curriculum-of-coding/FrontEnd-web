<template>
  <v-row justify="center" class="common_all_use_modal">
    <v-dialog
      v-model="setModal"
      persistent
      width="440px"
      class="modal"
      content-class="modal_round"
    >
      <v-card>
        <signUpModal
          @closeModal="close"
          v-if="modalContent === 'signup'"
        ></signUpModal>
        <div v-if="modalContent === 'login'">
          <loginModal @closeModal="close"></loginModal>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import signUpModal from '@/components/modal-content/signup-modal.vue';
import loginModal from '@/components/modal-content/login-modal.vue';
import { reactive } from '@nuxtjs/composition-api';

export default {
  name: 'common-vuetify-modal',
  props: {
    setModal: {
      default: false,
    },
    modalHeader: {
      default: '',
    },
    modalContent: {
      default: '',
    },
  },
  components: {
    signUpModal,
    loginModal,
  },
  setup(props, { emit }) {
    let openModalCheck = reactive({ props });
    const close = () => {
      return emit('setModal', openModalCheck.setModal);
    };
    return { close, openModalCheck };
  },
};
</script>

<style scoped lang="scss"></style>
