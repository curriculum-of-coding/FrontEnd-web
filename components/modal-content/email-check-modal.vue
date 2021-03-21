<template>
  <div class="login">
    <div class="beforeCheckUserinfo" v-show="!checkUserinfo">
      <div class="header_content">
        <span>{{ headerTitle }}</span>
        <div class="close" @click="closeModal"></div>
      </div>
      <div class="content">
        <customInput
          :inputLabelID="'아이디'"
          :placeholder="'회원가입했던 아이디를 입력해주세요'"
          @SetInputValue="getEmail"
        ></customInput>
        <customSelectBox
          :selectLabelID="'비밀번호 찾기 질문'"
          :select-options="passwordSelect"
          @setSelectPW="getPWSelect"
        ></customSelectBox>
        <customInput
          :inputLabelID="'비밀번호 찾기 답변'"
          :placeholder="'비밀번호 찾기 답변을 입력해주세요.'"
          @SetInputValue="getPasswordAnswer"
        ></customInput>
        <div class="btn_area" @click="checkUserInfoCorrect">
          비밀번호 찾기
        </div>
      </div>
    </div>
    <div class="CheckCompleteUserinfo" v-show="checkUserinfo === true">
      <passwordChangeModal @closeModal="closeModal"></passwordChangeModal>
    </div>
  </div>
</template>

<script lang="ts">
import customSelectBox from '@/components/common/common-select.vue';
import customInput from '@/components/common/common-input-radius.vue';
import passwordChangeModal from '@/components/modal-content/password-change-modal.vue';
import { reactive, ref, useContext } from '@nuxtjs/composition-api';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

export function useAxios(): NuxtAxiosInstance {
  const { $axios } = useContext();
  if (!$axios) {
    throw new Error('nuxt axios is not defined!');
  }
  return $axios;
}
export default {
  name: 'email-check-modal',
  props: {
    headerTitle: {
      type: String,
    },
  },
  components: {
    customSelectBox,
    customInput,
    passwordChangeModal,
  },
  setup(props, { emit }) {
    const { $axios, store } = useContext();

    let checkUserinfo = ref(false);
    const passwordSelect = [
      {
        options: '당신이 다닌 초등학교의 이름은?',
      },
      {
        options: '처음으로 키운 강아지 이름은?',
      },
      {
        options: '태어난 동네 이름은?',
      },
    ];
    const checkUserChangePassword = reactive({
      email: '',
      quiz: '당신이 다닌 초등학교의 이름은?',
      answer: '',
    });
    const checkUserInfoCorrect = () => {
      $axios
        .$post('api/account/password', {
          ...checkUserChangePassword,
        })
        .then(res => {
          store.dispatch('loginSuccess/setLoginToken', res.data.token);
          checkUserinfo.value = true;
        })
        .catch(() => {
          store.dispatch('notificationModal/setNotificationOption', {
            notification: true,
            notificationCode: 0,
            notificationContent: '오류입니다. 다시 한번 시도해주세요.',
          });
        });
    };
    const closeModal = () => {
      checkUserinfo.value = false;
      return emit('closeModal', 'passwordChange');
    };
    const getPWSelect = (value: string) => {
      checkUserChangePassword.quiz = value;
    };
    const getEmail = (value: string) => {
      checkUserChangePassword.email = value;
    };
    const getPasswordAnswer = (value: string) => {
      checkUserChangePassword.answer = value;
    };

    return {
      closeModal,
      passwordSelect,
      checkUserinfo,
      checkUserInfoCorrect,
      getPWSelect,
      checkUserChangePassword,
      getEmail,
      getPasswordAnswer,
    };
  },
};
</script>

<style scoped lang="scss">
.login {
  padding: 40px 40px 46px 40px;
  .beforeCheckUserinfo {
    .header_content {
      display: flex;
      justify-content: space-between;
      .close {
        width: 30px;
        color: #b3b3b3;
        height: 30px;
        cursor: pointer;
        &:before {
          content: '';
          position: absolute;
          top: 30px;
          right: 40px;
          margin-top: 1.25em;
          margin-left: 4em;
          height: 17px;
          border: solid #b3b3b3;
          border-width: 0 2px 0px 0;
          transform: rotate(45deg);
        }

        &:after {
          content: '';
          position: absolute;
          top: 30px;
          right: 40px;
          margin-top: 1.25em;
          margin-left: 4em;
          height: 17px;
          border: solid #b3b3b3;
          border-width: 0 2px 0px 0;
          transform: rotate(-45deg);
        }
      }
      span {
        font-size: 26px;
        color: #0d0d0d;
        font-weight: bold;
      }
    }
    .content {
      margin-top: 60px;
      .btn_area {
        margin-top: 90px;
        background: #f64e5b 0% 0% no-repeat padding-box;
        border-radius: 50px;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        color: #fff;
        font-size: 16px;
        font-weight: 100;
      }
    }
  }
}
</style>
