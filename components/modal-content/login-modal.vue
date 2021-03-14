<template>
  <div class="login">
    <div class="close" @click="closeModal"></div>
    <div class="header">
      LOGO
    </div>
    <div class="content">
      <dl class="content_header">
        <dt>로그인</dt>
      </dl>
      <commonInput
        :inputWidth="'100%'"
        :inputLabelID="'이메일 아이디'"
        :inputBorderRadius="'50px'"
        :placeholder="'예) email@email.co.kr'"
      ></commonInput>
      <commonInput
        :inputWidth="'100%'"
        :inputLabelID="'비밀번호'"
        :validation="false"
        :inputBorderRadius="'50px'"
      ></commonInput>
      <customCheckBox
        :checkBoxArray="checkBoxItems"
        :marginRight="'38px'"
        @setCheckbox="getCheckbox"
      ></customCheckBox>
      <button class="login_btn">
        로그인
      </button>
      <div class="login_easy">
        <div class="border"></div>
        <span>간편하게 로그인 하기</span>
        <div class="border"></div>
      </div>
      <div class="login_easy_btn_wrap">
        <button class="btn kakao">
          <img src="~/assets/img/common-img/kakao.svg" alt="kakao" />
        </button>
        <button class="btn google">
          <img src="~/assets/img/common-img/google.svg" alt="google" />
        </button>
        <button class="btn github">
          <img src="~/assets/img/common-img/github.svg" alt="github" />
        </button>
      </div>
      <div class="login_sign_password">
        <!-- <nuxt-link
          :to="'user/signup'"
          @click.native="closeModal"
          class="sign_btn"
        >
          회원가입하기
        </nuxt-link> -->
        <span @click="openSignupDetail" class="sign_btn">회원가입하기</span>
        <span>비밀번호 찾기</span>
      </div>
    </div>
  </div>
</template>

<script>
import commonInput from '@/components/common/common-input.vue';
import { reactive } from '@nuxtjs/composition-api';
import customCheckBox from '@/components/common/common-checkbox.vue';
export default {
  name: 'login-modal',
  components: {
    commonInput,
    customCheckBox,
  },
  setup(props, { emit }) {
    const closeModal = () => {
      return emit('closeModal');
    };
    const arrPicker = reactive([]);
    const loginOption = reactive({
      autoLogin: false,
      idSave: false,
    });
    const checkBoxItems = [
      { id: '아이디저장', check: true },
      { id: '자동로그인', check: false },
    ];
    const getCheckbox = value => {
      loginOption.autoLogin = !!value.includes('자동로그인');
      loginOption.idSave = !!value.includes('아이디저장');
      console.log(loginOption.autoLogin, loginOption.idSave);
    };
    const openSignupDetail = () => {
      return emit('openSignupDetail');
    };

    return {
      closeModal,
      checkBoxItems,
      getCheckbox,
      arrPicker,
      loginOption,
      openSignupDetail,
    };
  },
};
</script>

<style scoped lang="scss">
.login {
  padding: 86px 40px 46px 40px;
  .close {
    width: 30px;
    color: #b3b3b3;
    height: 30px;
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      top: 10px;
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
      top: 10px;
      right: 40px;
      margin-top: 1.25em;
      margin-left: 4em;
      height: 17px;
      border: solid #b3b3b3;
      border-width: 0 2px 0px 0;
      transform: rotate(-45deg);
    }
  }
  .header {
    text-align: center;
    font: normal normal 800 50px/58px NanumSquareRound;
    letter-spacing: -2.5px;
    color: #f64e5b;
    text-transform: uppercase;
  }
  .content {
    padding-top: 38px;
    color: #0d0d0d;
    text-align: center;
    .content_header {
      dt {
        margin-bottom: 14px;
        font: normal normal bold 26px/30px NanumSquareRound;
        letter-spacing: -1.3px;
        font-weight: bold;
      }
    }
    .login_btn {
      background: #f64e5b;
      color: #fff;
      font-weight: 100;
      width: 100%;
      height: 40px;
      border-radius: 50px;
      margin-top: 41px;
    }
    .login_easy {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 43px;
      span {
        flex: 0 0 auto;
        padding: 0 18.5px;
        color: #b6b6b6;
        font-weight: 100;
      }
      .border {
        flex: 1;
        border: 1px solid #dfdfdf;
        height: 0;
      }
    }
    .login_easy_btn_wrap {
      display: flex;
      margin-top: 30px;
      justify-content: space-around;
      .btn {
        width: 58px;
        height: 58px;
        border-radius: 50%;
        img {
          width: 26px;
          height: 26px;
        }
        &.kakao {
          background: #f8e100;
          font-weight: 500;
        }
        &.github {
          background: #3e77bf;
          color: #fff;
          font-weight: 500;
        }
        &.google {
          background: #f6f6f6;
          color: #3a1f16;
          font-weight: 500;
        }
      }
    }
    .login_sign_password {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 47.5px;
      .sign_btn {
        cursor: pointer;
      }
      a,
      span {
        font-size: 14px;
        font-weight: 500;
        color: #0d0d0d;
        position: relative;
        &:first-child {
          margin-right: 5px;
        }
        &:last-child {
          margin-left: 10px;
        }
        &:first-child:after {
          content: '';
          position: absolute;
          right: -10px;
          width: 1.5px;
          height: 12px;
          top: 1px;
          background: #0d0d0d;
        }
      }
    }
  }
}
</style>
