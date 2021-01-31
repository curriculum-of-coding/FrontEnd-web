<template>
	<div>
		<div class="checkboxTitle">관심분야</div>
		<div class="common_checkbox_wrap">
			<div
				v-for="(items, index) in checkBoxArray"
				:key="index"
				class="common_checkbox_content"
			>
				<label :for="items.id">
					{{ items.id }}
					<input
						type="checkbox"
						v-model="checkBoxPicker"
						:id="items.id"
						:value="items.id"
						@change="setCheckbox(checkBoxPicker)"
					/>
				</label>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive } from '@nuxtjs/composition-api';

export default {
	name: 'common-checkbox',
	props: {
		checkBoxArray: {
			type: Array,
		},

		checkBoxId: {
			type: Object,
		},
	},
	setup(props, { emit }) {
		const checkBoxPicker = reactive([]);
		const setCheckbox = value => {
			return emit('setCheckbox', value);
		};
		return { checkBoxPicker, setCheckbox };
	},
};
</script>

<style lang="scss" scoped>
.checkboxTitle {
	text-align: left;
	font: normal normal normal 18px/24px NanumSquareRound;
	letter-spacing: -0.9px;
	color: #0d0d0d;
}
.common_checkbox_wrap {
	display: flex;
	justify-content: flex-start;
	.common_checkbox_content {
		margin-top: 10px;
		label {
			cursor: pointer;
			font: normal normal normal 18px/24px NanumSquareRound;
			letter-spacing: -0.9px;
			color: #0d0d0d;
			input {
				cursor: pointer;
			}
		}
		&:first-child {
			margin-left: 0;
		}

		margin-left: 10px;
	}
}
</style>
