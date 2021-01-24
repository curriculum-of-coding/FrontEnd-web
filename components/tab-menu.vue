<template>
	<div id="tab_menu_wrap">
		<div class="tab_menu_contents_wrap">
			<ul class="tab_menu_contents">
				<li v-for="items in tabItems" :key="items.field">
					<span
						@click="setItemsFiled(items.name)"
						:class="{ active: items.active }"
					>
						{{ items.name }}
					</span>
				</li>
			</ul>
		</div>
		<div>
			<div v-if="showIsMain" class="new_update">
				최근 업데이트 : 2021.01.05 23:23:13
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed } from '@nuxtjs/composition-api';
import tabMenu from '@/types/menu';

export default {
	name: 'tab-menu',
	props: {
		tabItems: {
			type: Array,
		},
		mainPageShow: {
			type: Boolean,
			default() {
				return {
					mainPageShow: true,
				};
			},
		},
	},
	setup(props) {
		const setItemsFiled = (tabName:tabMenu) => {
			props.tabItems.forEach(v => {
				v.active = v.name === tabName;
			});
		};
		const showIsMain = computed(() => {
			return props.mainPageShow;
		});
		return { setItemsFiled, showIsMain };
	},
};
</script>

<style lang="scss" scoped>
.active {
	border-bottom: 3px solid #f64e5b;
	color: red;
}

#tab_menu_wrap {
	display: flex;
	justify-content: space-between;
	padding: 21px 0;
	align-items: center;
	border-bottom: 3px solid #dfdfdf;

	.new_update {
		font-size: 16px;
		color: #b6b6b6;
		margin-right: 58px;
	}

	.tab_menu_contents {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;

		li {
			margin-right: 80px;
			font-size: 20px;
			font-weight: 300;

			span {
				cursor: pointer;
				font-size: 20px;
				padding: 24px 20px;
			}
		}
	}
}
</style>
