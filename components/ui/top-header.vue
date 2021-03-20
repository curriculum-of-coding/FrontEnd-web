<template>
  <div id="header_wrap">
    <dl
      v-for="headerTitle in headerTitle"
      class="header_contents"
      :key="headerTitle.name"
    >
      <dt>{{ menuTitle.name }}</dt>
      <dd v-if="menuTitle.subTitle.length > 1">{{ menuTitle.subTitle }}</dd>
    </dl>
    <div class="btn_wrap" v-if="mainPageShow && !loginStatus.userInfo.email">
      <button class="login" @click="modalOpen('login')">로그인</button>
      <button class="login" @click="modalOpen('signup')">회원가입</button>
      <!-- TODO:삭제예정 -->
      <button class="login" @click="modalOpen('passwordChange')">
        비밀번호 변경
      </button>
    </div>
    <div v-else>
      <span>
        {{ loginStatus.userInfo.nickname }}
      </span>
      <div @click="logout">로그아웃</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, useContext, watchEffect } from '@nuxtjs/composition-api';
export default {
  name: 'top-header',
  props: {
    headerTitle: {
      type: Array,
    },
    mainPageShow: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  setup(props: any, { emit }: any) {
    const { store } = useContext();
    const menuTitle = computed(() => store.state.menuTitle.menuTitle);
    const loginStatus = computed(() => store.state.loginSuccess);
    watchEffect(() => {
      loginStatus;
    });
    const logout = () => {
      store.dispatch('notificationModal/setNotificationStatus', true);
      store.dispatch('notificationModal/setNotificationCode', 1);
      store.dispatch('notificationModal/setNotificationContent', '로그아웃');
      return store.dispatch('loginSuccess/setUserInfo', {});
    };
    const modalOpen = (value: any) => {
      return emit('openModal', value);
    };
    return {
      menuTitle,
      modalOpen,
      loginStatus,
      logout,
    };
  },
};
</script>

<style lang="scss" scoped>
#header_wrap {
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  .header_contents {
    dt {
      text-align: left;
      font: normal normal bold 30px/40px NanumSquareRound;
      letter-spacing: -1.5px;
      color: #0d0d0d;
      opacity: 1;
      padding-bottom: 13px;
    }
    dd {
      font: normal normal normal 18px/24px NanumSquareRound;
      margin-bottom: 10px;
    }
  }
  .btn_wrap {
    .login {
      color: #0d0d0d;
      background: #f0f0f0;
      padding: 5px;
      border-radius: 5px;
      font-size: 18px;
      font-weight: bold;
      margin-right: 14px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
