<template>
  <form @submit.stop.prevent="onSubmit">
    <div class="signup">
      <div class="header_area">
        <h1 class="title">계정 정보를 입력해주세요</h1>
        <div class="close" @click="closeModal"></div>
      </div>
      <div class="input_area">
        <customInput
          :inputLabelID="'아이디(이메일)'"
          :inputType="'email'"
          :inputBorderRadius="'50px'"
          :validation="ValidationChecker.email"
          :validationContent="emailValidationCotent"
          @SetInputValue="getEmail"
          @SetInputValueFocusOut="sameAsEmailAndNick('email', formData.email)"
        ></customInput>
      </div>
      <div class="input_area">
        <customInput
          :inputLabelID="'닉네임'"
          :inputType="'text'"
          :inputBorderRadius="'50px'"
          :validation="ValidationChecker.nickname"
          :validationContent="nicknameValidationCotent"
          @SetInputValue="getNickName"
          @SetInputValueFocusOut="
            sameAsEmailAndNick('nickname', formData.nickname)
          "
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
import {
  reactive,
  useContext,
  ref,
  Ref,
  computed,
} from '@nuxtjs/composition-api';
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
  setup(props: any, { emit }: any) {
    const { $axios, store } = useContext();
    const signupStatus = computed(() => store.state.signupSuccess.signupStatus);
    console.log(store.state.signupSuccess.signupStatus);

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
      nickname: true,
      password: true,
      passwordAnswer: true,
    });

    const formData: signUp = {
      email: '',
      password: '',
      nickname: '',
      PWDQuestType: '당신이 다닌 초등학교의 이름은?',
      PWDAnswer: '',
      interest: {
        front: 'N',
        back: 'Y',
        devops: 'N',
      },
      TOS: 'Y',
      PP: 'Y',
    };
    let emailValidationCotent: Ref<string> = ref(
      '올바른 이메일 주소를 입력해주세요.',
    );
    let nicknameValidationCotent: Ref<string> = ref(
      '중복된 닉네임 입니다 다시 입력해주세요.',
    );
    const sameAsEmailAndNick = (type: string, value: string) => {
      console.log('시발 여길왜탄', value.length);
      if (value.length !== 0) {
        console.log(value.length, 'tlsald;ksad;lsakd;saldksa;ldksa;ldk');
        const params = new URLSearchParams();
        params.append(`type`, type);
        params.append(`${type}`, value);
        $axios
          .get('http://localhost:3000/api/check', {
            params: params,
          })
          .then(res => {
            if (res.status === 200 && `${type}` == 'email') {
              ValidationChecker.email = true;
            }
            if (res.status === 200 && `${type}` == 'nickname') {
              ValidationChecker.nickname = true;
            }
          })
          .catch(err => {
            if (err.request.status == 400 && `${type}` === 'email') {
              ValidationChecker.email = false;
              emailValidationCotent.value = '중복된 이메일입니다.';
            }
            if (err.request.status == 400 && `${type}` == 'nickname') {
              ValidationChecker.nickname = false;
            }
          });
      } else {
        nicknameValidationCotent.value = '';
      }
    };
    const getEmail = (value: string) => {
      formData.email = value;
      ValidationChecker.email = emailRule.test(formData.email);
    };
    const getNickName = (value: string) => {
      formData.nickname = value;
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
          ValidationChecker.nickname &&
          ValidationChecker.password &&
          ValidationChecker.passwordAnswer
        ) {
          $axios
            .post('api/register', formData)
            .then(() => {
              store.dispatch('signupSuccess/setSignupStatus', true);
              store.dispatch('signupSuccess/setSignupEmail', formData.email);
              store.dispatch('notificationModal/setNotificationStatus', true);
              emit('closeModalSignupDetail');
            })
            .catch(err => {
              console.log('dddsds', err);
              alert('다시한번 확인해주세요.실패했습니다.');
            });
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
    const closeModal = () => {
      return emit('closeModalSignupDetail');
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
      nicknameValidationCotent,
      signupStatus,
      closeModal,
    };
  },
};
</script>

<style lang="scss" scoped>
.signup {
  padding: 34px 40px;
  background: #fff;
  width: 100%;
  border-radius: 20px;
  height: auto;
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
