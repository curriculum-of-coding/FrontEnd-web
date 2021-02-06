<template>
	<div class="signup">
		<div class="header_area">
			<h1 class="title">계정 정보를 입력해주세요</h1>
			<font-awesome-icon icon="times" class="close_btn" />
		</div>
		<div class="input_area">
			<customInput
				:inputLabelID="'아이디(이메일)'"
				:inputType="'email'"
				:validation="emailValidationChecker.validation"
				:validationContent="'올바른 이메일 주소를 입력해주세요.'"
				@SetInputValue="getEmail"
			></customInput>
		</div>
		<div class="input_area">
			<customInput
				:inputLabelID="'비밀번호'"
				:inputType="'password'"
				:placeholder="'8자리 이상 / 영문, 숫자, 특수문자 사용'"
				:validation="passwordValidationChecker.validation"
				:validationContent="'특수문자는 최소 1자 입력해주세요.'"
				@SetInputValue="getPassword"
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
				:placeholder="'비밀번호 찾기 답변을 입력해주세요.'"
				:validation="passwordValidationCheckerAnswer.validation"
				:validationContent="'답변을 3자 이상 입력해주세요'"
				@SetInputValue="getPasswordAnswer"
			></customInput>
		</div>
		<div class="input_area">
			<customCheckBox
				@setCheckbox="getCheckbox"
				:checkBoxArray="checkBoxItems"
			></customCheckBox>
		</div>
	</div>
</template>

<script lang="ts">
import customSelectBox from '@/components/common/common-select.vue';
import customInput from '@/components/common/common-input.vue';
import customCheckBox from '@/components/common/common-checkbox.vue';
import { reactive } from '@nuxtjs/composition-api';

const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const passwordRule = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;

export default {
	components: {
		customSelectBox,
		customInput,
		customCheckBox,
	},
	setup() {
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
		const checkBoxItems = [
			{ id: '프론트앤드', check: false },
			{ id: '백앤드', check: false },
			{ id: '데브옵스', check: false },
		];
		const formData = {
			USER_ID: '0',
			EMAIL: 'abcd@naver.com',
			USER_PWD: '1q2w3e4r5t!',
			REG_DATE: '20210118',
			PWD_QUEST_TYPE: '0',
			PWD_ANSWER: '이게 나다 리발',
			INTEREST_FRONT: 'Y',
			INTEREST_BACK: 'Y',
			INTEREST_DEVOPS: 'Y',
			TOS_YN: 'Y',
			PP_YN: 'Y',
		};
    const getEmail = value => {
			formData.EMAIL = value;
			emailValidationChecker.validation = emailRule.test(formData.EMAIL);
		};

		const getPassword = value => {
			formData.USER_PWD = value;
			console.log(formData.USER_PWD);
			passwordValidationChecker.validation = passwordRule.test(
				formData.USER_PWD,
			);
		};
		const getPasswordAnswer = value => {
			formData.PWD_ANSWER = value;
			passwordValidationCheckerAnswer.validation =
				formData.PWD_ANSWER.length >= 3;
		};
		let emailValidationChecker = reactive({
			validation: true,
		});
		let passwordValidationChecker = reactive({
			validation: true,
		});
		let passwordValidationCheckerAnswer = reactive({
			validation: true,
		});
		const getPWSelect = value => {
			return (formData.PWD_QUEST_TYPE = value);
		};
		const getCheckbox = value => {
			interests(value);
		};
		const interests = value => {
			formData.INTEREST_FRONT = !!value.includes('프론트앤드');
			formData.INTEREST_BACK = !!value.includes('백앤드');
			formData.INTEREST_DEVOPS = !!value.includes('데브옵스');
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
			emailValidationChecker,
			passwordValidationChecker,
			passwordValidationCheckerAnswer,
			getCheckbox,
		};
	},
};
</script>
<style>
body {
	background: #354151;
}
</style>
<style lang="scss" scoped>
.signup {
	padding: 34px 40px 60px 40px;
	width: 440px;
	height: 857px;
	background: #fff;
	position: absolute;
	left: 50%;
	top: 50%;
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
}
</style>
