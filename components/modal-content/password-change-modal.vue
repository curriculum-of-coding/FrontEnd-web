<template>
  <div class="password_change">
    <div class="header_content">
      <span>비밀번호찾기</span>
      <div class="close" @click="closeModal"></div>
    </div>
    <span class="please_change_paasword">
      비밀번호를 다시 설정해주세요.
    </span>
    <div class="content">
      <customInput
        :inputLabelID="'비밀번호 재설정'"
        :placeholder="'8자리 이상 / 영문, 숫자, 특수문자 사용'"
        @SetInputValue="getPassword"
      ></customInput>
      <div class="btn_area" @click="changePassword">
        비밀번호 재설정
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import customInput from '@/components/common/common-input-radius.vue';

import { computed, useContext, ref, reactive } from '@nuxtjs/composition-api';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

export function useAxios(): NuxtAxiosInstance {
  const { $axios } = useContext();
  if (!$axios) {
    throw new Error('nuxt axios is not defined!');
  }
  return $axios;
}
export default {
  name: 'password-change-modal',
  components: {
    customInput,
  },

  setup(props, { emit }) {
    const { $axios, store } = useContext();
    const loginStatus = computed(() => store.state.loginSuccess);
    const passwordContent = reactive({
      newPassword: '',
      oldPassword: 'dsadsdsdsdsd',
    });
    const closeModal = () => {
      return emit('closeModal');
    };
    const getPassword = (value: string) => {
      passwordContent.newPassword = value;
    };
    const changePassword = () => {
      $axios
        .$put(
          'api/account/password',
          {
            ...passwordContent,
          },
          {
            headers: {
              Authorization: `Bearer ${loginStatus.value.loginToken}`,
            },
          },
        )
        .then(() => {
          store.dispatch('notificationModal/setNotificationOption', {
            notification: true,
            notificationCode: 1,
            notificationContent:
              '비밀번호 변경이 성공했습니다. 다시 한번 로그인 해주세요',
          });
          store.dispatch('loginSuccess/setUserInfo', {});
          closeModal();
        })
        .catch(() => {
          store.dispatch('notificationModal/setNotificationOption', {
            notification: true,
            notificationCode: 0,
            notificationContent: '오류입니다. 다시 한번 시도해주세요.',
          });
        });
    };
    return {
      closeModal,
      loginStatus,
      changePassword,
      getPassword,
      passwordContent,
    };
  },
};
</script>

<style scoped lang="scss">
.password_change {
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
  .please_change_paasword {
    display: inline-block;
    font-weight: 100;
    color: #909090;
    margin-top: 60px;
    margin-bottom: 30px;
    font-size: 14px;
  }
  .content {
    .btn_area {
      margin-top: 80px;
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
</style>
