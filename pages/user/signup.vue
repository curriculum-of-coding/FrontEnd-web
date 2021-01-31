<template>
  <div class="backBox">
    <div class="inContents">

      <header>
        <div class="head_title">계정 정보를 입력해주세요.</div>
        <div class="signOut" onclick="location.href='/user/login'">X</div>
      </header>
      <section>
        <div class="sec_name">아이디 (이메일)</div>
        <input type="text" class="sec_input" v-model="id" placeholder="예) email@email.co.kr">
      </section>
      <section>
        <div class="sec_name">비밀번호</div>
        <input type="text" class="sec_input" v-model="pw" placeholder="8자리 이상/영문,숫자,특수문자 사용">
      </section>
      <section>
        <div class="sec_name">비밀번호 찾기 질문</div>
        <select v-model="pwq_selected" class="sign_select">
          <option disabled selected>질문을 선택해주세요.</option>
          <option>1+1은?</option>
          <option>처음으로 키운 강아지 이름은?</option>
          <option>태어난 동네 이름은?</option>
          <option>주민등록번호</option>
        </select>
      </section>
      <section>
        <div class="sec_name">비밀번호 찾기 답변</div>
        <input type="text" class="sec_input" v-model="pwAnswer" placeholder="비밀번호 찾기 답변을 입력해주세요.">
      </section>
      <section>
        <div class="sec_name">관심 분야</div>
        <select v-model="secq_selected" class="sign_select">
          <option disabled selected>관심분야를 선택해주세요.</option>
          <option>Web</option>
          <option>App</option>
          <option>우주 산업</option>
          <option>영상 / 그래픽</option>
        </select>
      </section>
      <section>
        <div class="sign_checkBox">
          <v-checkbox class="sign_checkBox" label=" 모두동의">
          </v-checkbox>
        </div>
        <div class="sign_checkBox">
          <v-checkbox class="sign_checkBox" label=" (필수)서비스 이용약관">
          </v-checkbox>
          <a class="sign_detail">자세히 보기</a>
        </div>
        <div class="sign_checkBox">
          <v-checkbox class="sign_checkBox" label=" (필수)개인정보 처리방침">
          </v-checkbox>
          <a class="sign_detail">자세히 보기</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      form:{
        id: '',
        pw: '',
        pwAnswer: '',
        secq_selected: '',
        pwq_selected: ''
      }
    }
  }
}

</script>

<style>
body {
  background-color: #354151;
}

.backBox {
  height: fit-content;
  width: fit-content;
  padding: 2rem;
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

header {
  position: relative;
  margin-bottom: 2.2rem;
}

.head_title {
  font-size: 17pt;
  margin-left: -4rem;
}

section {
  margin-bottom: 1.2rem;
}


option {
  font-weight: bold;
  font-size: 11pt;
}

.signOut {
  position: absolute;
  text-align: right;
  width: 2rem;
  right: 0px;
  margin-top: -2.8rem;
  margin-right: -0.5rem;
  font-size: 22pt;
  font-weight: normal;
  color: #B6B6B6;
}

.signOut:hover {
  font-weight: bolder;
  color: #47494e;
}

.sec_name {
  text-align: left;
  font-size: 12pt;
  font-weight: bold;
  margin-bottom: 0.3rem;
  color: #354151;
}

.sec_input {
  border: #969696 thin solid;
  border-radius: 2rem;
  font-size: 10pt;
  padding: 1rem;
  height: 2.1rem;
  width: 20rem;
}

.sign_select {
  background: url("https://cdn.iconscout.com/icon/free/png-256/down-arrow-16-460295.png") no-repeat 95% 50%;
  background-size: 2rem;
  color: #354151;
  border: #969696 thin solid;
  border-radius: 2rem;
  font-size: 10pt;
  height: 2.1rem;
  width: 20rem;
  padding-left: 1rem;
}

.sec_input::placeholder {
  color: #B6B6B6;
}

.sign_checkBox {
  position: relative;
  margin: 0px;
  margin-bottom: 0.7rem;
  height: 1.5rem;
}

.sign_detail {
  position: absolute;
  font-weight: bold;
  font-size: 11pt;
  text-decoration: underline;
  color: #969696;
  bottom: -0.2rem;
  right: 0px;
}

.theme--light.v-icon {
  color: #F64E5B;
}

</style>
