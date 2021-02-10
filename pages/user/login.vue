<template>
  <div class="backBox">
    <div class="inContents">
      <div class="logo">
        LOGO
      </div>
      <div class="title">회원가입</div>
      <div class="sub_title">데브레프트를 함께 만들어가요!</div>
      <div class="login_btn login_kao">카카오톡 회원가입</div>
      <div class="login_btn login_go">구글 회원가입</div>
      <div class="login_btn login_git">github 회원가입</div>
      <hr class="login_line">
      <div class="login_text">sns 계정이 없으신가요?</div>
      <nuxt-link :to="{path:'signup'}">
        <div class="login_btn login_email">이메일 회원가입</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
body {
  background-color: #354151;
}

.backBox {
  height: fit-content;
  width: fit-content;
  padding: 1rem;
  margin: auto;
  margin-top: 10%;
  border-radius: 0.9rem;
  background-color: white;
}

.inContents {
  text-align: center;
  height: fit-content;
  width: max-content;
  margin: auto;
}

.logo {
  font-size: 28pt;
  font-weight: lighter;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: #F64E5B;
}

.title {
  font-size: 15pt;
  margin-bottom: 0.35rem;
}

.sub_title {
  font-size: 12pt;
  font-weight: bold;
  margin-bottom: 2rem;
}

.login_btn {
  font-size: 10pt;
  font-weight: bold;
  line-height: 2.1rem;
  height: 2.1rem;
  width: 19rem;
  margin-bottom: 1.1rem;
  border-radius: 5rem;
  background-color: #B6B6B6;
}

.login_kao {
  background: url('~assets/img/common-img/kakao.png') no-repeat 32% 50%;
  background-size: 1.4rem;
  background-color: gold;
  padding-left: 1.8rem;
}

.login_go {
  background: url('~assets/img/common-img/google.png') no-repeat 35% 50%;
  background-size: 1rem;
  background-color: gainsboro;
  padding-left: 1.3rem;
}

.login_git {
  background: url('~assets/img/common-img/github.png') no-repeat 32% 50%;
  background-size: 1.4rem;
  background-color: royalblue;
  padding-left: 1.5rem;
  color: white;
}

.login_email {
  background-color: #F64E5B;
  color: white;
}

.login_line {
  border-bottom: 0px;
  border-top: gainsboro solid 1px;
  margin-top: 2.8rem;
  margin-bottom: 1.2rem;
}

.login_text {
  font-weight: bold;
  font-size: 10pt;
  color: darkgrey;
  margin-bottom: 0.6rem;
}

</style>
