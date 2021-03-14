<template>
  <v-row justify="center" class="common_all_use_modal">
    <v-dialog
      v-model="setModal"
      persistent
      width="500px"
      height="100%"
      class="modal"
      content-class="modal_round"
    >
      <v-card>
        <signUpModal
          @closeModal="close"
          v-if="modalContent === 'signup' && !singupDetail"
          @openSignupDetail="openSignupDetail"
        ></signUpModal>
        <loginModal
          @closeModal="close"
          v-if="modalContent === 'login' && !singupDetail"
          @openSignupDetail="openSignupDetail"
        ></loginModal>
        <emailCheckModal
          v-if="modalContent === 'passwordChange'"
          :headerTitle="'비밀번호 찾기'"
          @closeModal="close"
        ></emailCheckModal>
        <signupDetailModal
          v-if="singupDetail"
          :headerTitle="'회원가입'"
          @closeModal="close"
          @closeModalSignupDetail="closeSignupDetailModal"
        ></signupDetailModal>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import signUpModal from '@/components/modal-content/signup-modal.vue';
import loginModal from '@/components/modal-content/login-modal.vue';
import emailCheckModal from '@/components/modal-content/email-check-modal.vue';
import signupDetailModal from '@/components/modal-content/signup-detail-modal.vue';

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
    singupDetail: {
      default: '',
    },
  },
  components: {
    signUpModal,
    loginModal,
    emailCheckModal,
    signupDetailModal,
  },
  setup(props, { emit }) {
    let openModalCheck = reactive({ props });
    const close = () => {
      return emit('setModal', openModalCheck.setModal);
    };
    const openSignupDetail = () => {
      return emit('openSignupDetail', 'signupDetail');
    };
    const closeSignupDetailModal = () => {
      return emit('closeSignupDetailModal');
    };
    return { close, openModalCheck, openSignupDetail, closeSignupDetailModal };
  },
};
</script>

<style scoped lang="scss"></style>
