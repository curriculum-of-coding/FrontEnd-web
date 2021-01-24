<template>
	<div class="main">
		<sideMenu></sideMenu>
		<div class="content_wrap">
			<div class="header">
				<header-menu :header-title="headerItems" :main-page-show="true">
				</header-menu>
			</div>
			<div class="content">
				<Nuxt></Nuxt>
			</div>
		</div>
	</div>
</template>

<script>
import headerMenu from '~/components/ui/top-header.vue';
import sideMenu from '~/components/ui/side-menu';

export default {
	data() {
		return {
			headerItems: [
				{
					title: '커리큘럼',
					subTitle:
						'이런 강의는 어떠신가요? 현직자들이 추천하는 커리큘럼입니다.',
				},
			],
		};
	},
	components: {
		sideMenu,
		headerMenu,
	},
};
</script>
<style lang="scss">
.content,
.header {
	padding-left: 50px;
}

.content {
}

.content_wrap {
	width: calc(100% - 163px);
}

.main {
	display: flex;
	justify-content: space-between;
}
</style>
