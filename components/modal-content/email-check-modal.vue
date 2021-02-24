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
        ></customInput>
        <customSelectBox
          :selectLabelID="'비밀번호 찾기 질문'"
          :select-options="passwordSelect"
          @setSelectPW="getPWSelect"
        ></customSelectBox>
        <customInput
          :inputLabelID="'비밀번호 찾기 답변'"
          :placeholder="'비밀번호 찾기 답변을 입력해주세요.'"
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

<script>
import customSelectBox from '@/components/common/common-select.vue';
import customInput from '@/components/common/common-input-radius.vue';
import passwordChangeModal from '@/components/modal-content/password-change-modal';

import { ref, watch, reactive } from '@nuxtjs/composition-api';
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
    let checkUserinfo = ref(false);
    const passwordSelect = [
      {
        PWD_QUEST_TYPE: 0,
        options: '1+1은?',
      },
      {
        PWD_QUEST_TYPE: 1,
        options: '처음으로 키운 강아지 이름은?',
      },
      {
        PWD_QUEST_TYPE: 2,
        options: '태어난 동네 이름은?',
      },
    ];
    const checkUserInfoCorrect = () => {
      checkUserinfo.value = true;
    };
    const closeModal = () => {
      checkUserinfo.value = false;
      return emit('closeModal');
    };

    return { closeModal, passwordSelect, checkUserinfo, checkUserInfoCorrect };
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
