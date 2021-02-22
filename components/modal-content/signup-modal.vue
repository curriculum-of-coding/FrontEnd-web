<template>
  <div class="login">
    <font-awesome-icon icon="times" class="close" @click="closeModal" />
    <div class="header">
      LOGO
    </div>
    <div class="content">
      <dl class="content_header">
        <dt>회원가입</dt>
        <dd>데브리프트를 함께 만들어가요!</dd>
      </dl>
      <div class="content_btn_wrap">
        <button class="sign_btn kakao">
          <img src="~/assets/img/common-img/kakao.svg" alt="kakao" />
          카카오톡 회원가입
        </button>
        <button class="sign_btn google">
          <img src="~/assets/img/common-img/google.svg" alt="google" />
          구글 회원가입
        </button>
        <button class="sign_btn github">
          <img src="~/assets/img/common-img/github.svg" alt="github" />
          Github 회원가입
        </button>
      </div>
      <div class="no_have_sns">
        <span class="text">
          sns 계정이 없으신가요?
        </span>
        <nuxt-link
          :to="'user/signup'"
          @click.native="closeModal"
          class="sign_btn"
        >
          이메일 회원가입
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import {} from '@nuxtjs/composition-api';
export default {
  name: 'login-modal',
  setup(props, { emit }) {
    const closeModal = () => {
      return emit('closeModal');
    };

    return { closeModal };
  },
};
</script>

<style scoped lang="scss">
.login {
  padding: 86px 40px 46px 40px;
  .close {
    position: absolute;
    right: 20px;
    top: 30px;
    cursor: pointer;
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
      }
      dd {
        font: normal normal normal 18px/21px NanumSquareRound;
        letter-spacing: -0.9px;
      }
    }
    .content_btn_wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      .sign_btn {
        height: 48px;
        width: 100%;
        border-radius: 50px;
        background: #f8e100 0% 0% no-repeat padding-box;
        opacity: 1;
        margin-bottom: 23px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 18px;
          height: 18px;
          margin-right: 10px;
        }
        &:first-child {
          margin-top: 37px;
        }
        &:last-child {
          margin-bottom: 0;
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
    .no_have_sns {
      width: 100%;
      margin-top: 52.5px;
      border-top: 1px solid #dfdfdf;
      display: flex;
      flex-direction: column;
      .text {
        display: inline-block;
        padding-top: 24.5px;
        color: #b6b6b6;
        font-weight: 100;
      }
      .sign_btn {
        margin-top: 17px;
        background: #f64e5b 0 0 no-repeat padding-box;
        border-radius: 50px;
        height: 48px;
        color: #fff;
        font-weight: 100;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
