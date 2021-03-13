<template>
  <form @submit.stop.prevent="onSubmit">
    <div class="signup">
      <div class="header_area">
        <h1 class="title">계정 정보를 입력해주세요</h1>
        <font-awesome-icon icon="times" class="close_btn" />
      </div>
      <div class="input_area">
        <customInput
          :inputLabelID="'아이디(이메일)'"
          :inputType="'email'"
          :inputBorderRadius="'50px'"
          :validation="ValidationChecker.email"
          :validationContent="emailValidationCotent"
          @SetInputValue="getEmail"
        ></customInput>
      </div>
      <div class="input_area">
        <customInput
          :inputLabelID="'닉네임'"
          :inputType="'text'"
          :inputBorderRadius="'50px'"
          :validation="ValidationChecker.nickname"
          :validationContent="'중복된 닉네임입니다.'"
          @SetInputValue="getNickName"
        ></customInput>
      </div>
      <div class="input_area">
        <customInput
          :inputLabelID="'비밀번호'"
          :inputType="'password'"
          :inputBorderRadius="'50px'"
          :validation="ValidationChecker.password"
          :validationContent="'특수문자는 최소 1자 입력해주세요.'"
          @SetInputValue="getPassword"
          :defalutValidation="true"
          :defalutValidationText="'8자 이상 , 영문 , 숫자'"
        ></customInput>
      </div>
      <customSelectBox
        :selectLabelID="'비밀번호 찾기 질문'"
        :select-options="passwordSelect"
        v-model="formData.PWD_QUEST_TYPE"
        @setSelectPW="getPWSelect"
      ></customSelectBox>
      <div class="input_area">
        <customInput
          :inputLabelID="'비밀번호 찾기 답변'"
          :inputType="'text'"
          :inputBorderRadius="'50px'"
          :placeholder="'비밀번호 찾기 답변을 입력해주세요.'"
          :validation="ValidationChecker.passwordAnswer"
          :validationContent="'답변을 3자 이상 입력해주세요'"
          @SetInputValue="getPasswordAnswer"
        ></customInput>
      </div>
      <div class="input_area">
        <customCheckBox
          @setCheckbox="getCheckbox"
          :checkBoxArray="checkBoxItems"
          :headerTitle="'관심분야'"
        ></customCheckBox>
      </div>
      <div class="input_area term_use">
        <customCheckBoxSignUp
          :checkBoxArray="checkBoxItemsSignUp"
          :column="true"
          @setCheckbox="getUserAssign"
        >
        </customCheckBoxSignUp>
      </div>
      <button type="submit" class="signup_btn">회원가입</button>
    </div>
  </form>
</template>

<script lang="ts">
import customSelectBox from '@/components/common/common-select.vue';
import customInput from '@/components/common/common-input.vue';
import customCheckBox from '@/components/common/common-checkbox.vue';
import customCheckBoxSignUp from '@/components/common/common-checkbox-signup.vue';
import { reactive, useContext, ref, Ref } from '@nuxtjs/composition-api';
import signUp from '~/types/signup/signup';
import interCheckbox from '~/types/signup/interCheckbox';
import passwordSelect from '~/types/signup/passwordSelect';
import termUser from '~/types/signup/termUser';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const passwordRule = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
export function useAxios(): NuxtAxiosInstance {
  const { $axios } = useContext();
  if (!$axios) {
    throw new Error('nuxt axios is not defined!');
  }
  return $axios;
}
export default {
  components: {
    customSelectBox,
    customInput,
    customCheckBox,
    customCheckBoxSignUp,
  },
  setup() {
    const { $axios } = useContext();

    const passwordSelect: passwordSelect[] = [
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
    const checkBoxItems: interCheckbox[] = [
      { id: '프론트앤드', check: false },
      { id: '백앤드', check: false },
      { id: '데브옵스', check: false },
    ];
    const checkBoxItemsSignUp: termUser[] = [
      { id: '(필수) 서비스 이용약관', contentType: 'tos', check: false },
      { id: '(필수) 개인정보 처리방침', contentType: 'pp', check: false },
    ];
    let ValidationChecker = reactive({
      email: true,
      nickName: true,
      password: true,
      passwordAnswer: true,
    });

    const formData: signUp = {
      EMAIL: '',
      password: '',
      nickname: '!',
      PWDQuestType: '당신이 다닌 초등학교의 이름은?',
      PWDAnswer: '',
      interest: {
        front: 'N',
        back: 'N',
        devops: 'N',
      },
      TOS: 'N',
      PP: 'N',
    };
    let emailValidationCotent: Ref<string> = ref(
      '올바른 이메일 주소를 입력해주세요.',
    );

    const sameAsEmailAndNick = (type: string, value: string) => {
      let paramType = '';
      value === 'email' ? (paramType = 'email') : (paramType = 'nickname');
      $axios
        .get('http://localhost:3000/api/check', {
          params: {
            type: paramType,
            paramType: value,
          },
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log('dddsds', err);
        });
    };
    const getEmail = (value: string) => {
      ValidationChecker.email = emailRule.test(value);
      if (ValidationChecker.email) {
        formData.EMAIL = value;
        sameAsEmailAndNick('email', formData.EMAIL);
      }
    };
    const getNickName = (value: string) => {
      formData.nickname = value;
      sameAsEmailAndNick('nickname', formData.nickname);
    };
    const getPassword = (value: string) => {
      formData.password = value;
      ValidationChecker.password = passwordRule.test(formData.password);
    };
    const getPasswordAnswer = (value: string) => {
      formData.PWDAnswer = value;
      ValidationChecker.passwordAnswer = formData.PWDAnswer.length >= 3;
    };

    const getPWSelect = (value: string) => {
      console.log(value);
      return (formData.PWDQuestType = value);
    };
    const getCheckbox = (value: string[]) => {
      interests(value);
    };

    const onSubmit = () => {
      if (!formData.TOS || !formData.PP) {
        alert('필수항목');
      } else {
        if (
          ValidationChecker.email &&
          ValidationChecker.nickName &&
          ValidationChecker.password &&
          ValidationChecker.passwordAnswer
        ) {
          $axios
            .post('api/register', formData)
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log('dddsds', err);
            });
        } else {
          alert('다시한번 확인해주세요.실패했습니다.');
        }
      }
    };

    //체크박스 벨류 삼항식
    const interests = (value: string[]) => {
      value.includes('프론트앤드')
        ? (formData.interest.front = 'Y')
        : (formData.interest.front = 'N');
      value.includes('백앤드')
        ? (formData.interest.back = 'Y')
        : (formData.interest.back = 'N');
      value.includes('데브옵스')
        ? (formData.interest.devops = 'Y')
        : (formData.interest.devops = 'N');
    };
    const getUserAssign = (value: String) => {
      value.includes('(필수) 서비스 이용약관')
        ? (formData.TOS = 'Y')
        : (formData.TOS = 'N');
      value.includes('(필수) 개인정보 처리방침')
        ? (formData.PP = 'Y')
        : (formData.PP = 'N');
    };
    return {
      getPWSelect,
      checkBoxItems,
      formData,
      passwordSelect,
      getEmail,
      interests,
      getPassword,
      getPasswordAnswer,
      checkBoxItemsSignUp,
      getCheckbox,
      onSubmit,
      getUserAssign,
      sameAsEmailAndNick,
      emailValidationCotent,
      getNickName,
      ValidationChecker,
    };
  },
};
</script>

<style lang="scss" scoped>
.signup {
  padding: 34px 40px;
  width: 440px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 20px;
  transform: translate(-50%, -50%);

  .header_area {
    display: flex;
    justify-content: space-between;
    margin-bottom: 55px;

    .close_btn {
      font-size: 30px;
      font-weight: normal;
      color: #b3b3b3;
    }

    .title {
      text-align: left;
      font: normal normal bold 26px/35px NanumSquareRound;
      letter-spacing: -1.3px;
      color: #0d0d0d;
      opacity: 1;
    }
  }
  .term_use {
    margin-top: 25px;
  }
  .signup_btn {
    width: 100%;
    height: 40px;
    background: #fe3c53;
    color: #fff;
    border-radius: 5px;
    font-weight: 100;
    border-radius: 50px;
    margin-top: 60px;
  }
}
</style>
